const express = require('express')
const path = require('path')
const app = express();
const port = 2500;
const queryString = require("querystring");
const { connection } = require('./public/utils/dbConnection');


app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));

app.listen(port, (err) => {
    if (err)
        console.log(err)
    console.log("Server is running on port 2500")
})
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/clientInfo", (req, res) => {
    const clientId = req.query.clientId;
    res.render("clientInfo", { clientId });
});

app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

app.get("/trash", async (req, res) => {
    try {
        const clientTrash = await getAllClientTrash(); 
        clientTrash.forEach((e)=>{e.deleted_date=new Date(e.deleted_date).toLocaleString("en-US", {
            dateStyle: "short"
            })
        });
        const projectTrash = await getAllProjectTrash(); 
        projectTrash.forEach((e)=>{e.deleted_date=new Date(e.deleted_date).toLocaleString("en-US", {
            dateStyle: "short"
            })
        });
        res.render("trash", {
            clients: clientTrash,  
            projects: projectTrash 
        });
    } catch (err) {
        console.error("Error fetching trash data:", err);
        res.sendStatus(500);
    }
});


app.get("/log", async (req, res) => {
    try {
        const result = await getLogFromDb(); 
       
        res.render("log", {result});
    } catch (err) {
        console.error("Error fetching trash data:", err);
        res.sendStatus(500);
    }
});




function getAllClientTrash() {
    const query = "select * from client_trash ct join client c on c.id=ct.client_id where c.is_trashed=1";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.error("ERROR : ", err);
                return reject(err);
            }
            
            resolve(result);
        });
    });
}
function getAllProjectTrash() {
    const query = "select * from project_trash pt join project p on p.project_id=pt.project_id where p.is_trashed=1";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.error("ERROR : ", err);
                return reject(err);
            }
            resolve(result);
        });
    });

}

app.get("/AllClients", async (req, res) => {
    try {
        let clientList = await getAllClients();
        res.json({ "data": clientList });
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})


app.get('/getClient', async (req, res) => {
    let { clientId } = req.query;
    try {
        let clientDetails = await getClientDetailsFromDB(clientId);
        // clientDetails.domain=domains[clientDetails.domain].auth
        res.json({ data : [clientDetails] })
    } catch (err) {
        console.log(err)
        reject(500)
    }
})

async function getClientDetailsFromDB(clientId) {
    let query = "select * from client where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [clientId], (err, result) => {
            if (err) {
                console.log("GET CLIENT ID FROM DB ERROR \n", err);
                reject(500);
            }
            resolve(result[0]);
        })
    })
}



async function getAllClients() {
    let query = "select c.*,count(p.project_id) as project_count from client c left join project p on c.id = p.client_id and p.is_trashed = 0 where c.is_trashed = 0 group by c.id";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log("GET ALL CLIENT FROM DB ERRORn\n", err)
                reject(500)
            }
            resolve(result);
        })
    })
}

app.post("/addClient", async (req, res) => {
    let { name, description, client_id, client_secret } = req.body;
    try {
        let client_index = await addClientInDb(name, description, client_id, client_secret);
        res.sendStatus(client_index?200:500)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})



async function addClientInDb(name, description, client_id, client_secret) {
    let uniqueStatus = await checkDuplicateClientId(client_id);
    return new Promise((resolve, reject) => {
        if (uniqueStatus) {
            let query = "insert into client (name,description,client_id,client_secret,is_trashed) values (?,?,?,?,0)";
            connection.query(query, [name, description, client_id, client_secret], (err, result) => {
                if (err) {
                    console.log("ADD CLIENT IN DB ERROR\n", err)
                    reject(500);
                }
                if (result.affectedRows === 1) resolve(result.insertId);
            })
        }
        else {
            resolve(409);
        }
    })

}
app.get('/project_overview', async (req, res) => {
    const projectId = req.query.projectId;
    const project = await getProjectById(projectId);
   
    res.render('project_overview', {project});
    
});


async function getProjectById(projectId) {
    let query = "select * from project p join token t on p.project_id = t.project_id where p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAILS ERR\n", err)
                reject(500);
            }
            result.forEach((e)=>e.created_time = changeTime(e.created_time));
            resolve(result[0]);
        })
    })
}

app.get('/getClient', async (req, res) => {
    let { clientId } = req.query;
    console.log(clientId)
    try {
        let clientDetails = await getClientDetailsFromDB(clientId);
        // clientDetails.domain=domains[clientDetails.domain].auth
        res.json({ "data": [clientDetails] })
    } catch (err) {
        console.log(err)
        reject(500)
    }
})

async function getClientDetailsFromDB(clientId) {
    let query = "select * from client where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [clientId], (err, result) => {
            if (err) {
                console.log("GET CLIENT ID FROM DB ERROR \n", err);
                reject(500);
            }
            resolve(result[0]);
        })
    })
}

app.get("/project", (req, res) => {
    const clientId = req.query.clientId;   
    res.render("project", { clientId });
});


app.post('/storedata', (req, res) => {
    const { clientId, name, description, scopes } = req.body;

    const insertProject =
        "INSERT INTO project(name,description,scopes,is_trashed,client_id) VALUES(?,?,?,?,?)";

    connection.query(insertProject,
        [name, description, scopes, 0, clientId],
        (error, result) => {

            if(error){
                return res.status(500).json({ error: "DB error" });
            }

            connection.query(
                "SELECT client_id, client_secret FROM client WHERE id=?",
                [clientId],
                (err, clientResult) => {

                    if(err || clientResult.length === 0){
                        return res.status(404).json({ error: "Client not found" });
                    }

                    const client = clientResult[0];

                    res.json({
                        projectId: result.insertId,
                        client_id: client.client_id,
                        client_secret: client.client_secret
                    });
                }
            );
        }
    );
});

app.get("/tester", (req, res) => {
    res.render("tester")
})


app.post("/api-proxy", async (req, res) => {
    const { url, method, headers, params, body } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    try {
        // Build URL with query params
        let targetUrl = url;
        if (params && Object.keys(params).length > 0) {
            const qs = new URLSearchParams(
                Object.entries(params).map(([k, v]) => [k, String(v)])
            ).toString();
            targetUrl += (targetUrl.includes('?') ? '&' : '?') + qs;
        }

        const fetchOptions = {
            method: method || 'GET',
            headers: headers || {}
        };

        if (body && method !== 'GET' && method !== 'DELETE') {
            fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
        }

        const start = Date.now();
        const apiRes = await fetch(targetUrl, fetchOptions);
        const elapsed_ms = Date.now() - start;

        const resText = await apiRes.text();
        let resBody;
        try { resBody = JSON.parse(resText); } catch { resBody = resText; }

        const resHeaders = {};
        apiRes.headers.forEach((v, k) => { resHeaders[k] = v; });

        res.json({
            status: apiRes.status,
            statusText: apiRes.statusText,
            headers: resHeaders,
            body: resBody,
            elapsed_ms,
            size_bytes: Buffer.byteLength(resText, 'utf8')
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/getcode', async (req, res) => {
    const code = req.query.code;
    const state = JSON.parse(req.query.state);
    const projectId = state.projectId;

    console.log("OAuth Code:", code);
    console.log("Project ID:", projectId);

    connection.query(
        "SELECT * FROM project WHERE project_id=?",
        [projectId],
        async (error, projectResult) => {

            if(error || projectResult.length === 0){
                
                return res.redirect("/");
            }

            const project = projectResult[0];

            connection.query(
                "SELECT * FROM client WHERE id=?",
                [project.client_id],
                async (err, clientResult) => {

                    if(err || clientResult.length === 0){
                        return res.redirect("/");
                    }

                    const client = clientResult[0];

                    const tokens = await getAccessToken(
                        code,
                        client.client_id,
                        client.client_secret,
                        project.scopes,
                        "http://localhost:2500/getcode"
                    );

                    connection.query(
                        "INSERT INTO token(access_token,created_time,project_id,refresh_token) VALUES(?,?,?,?)",
                        [
                            tokens.access_token,
                            new Date().getTime(),
                            projectId,
                            tokens.refresh_token
                        ]
                    );

                    res.redirect("/");
                }
            );
        }
    );
});

async function getAccessToken(code,client_id,client_secret,scope,redirect_uri){
    let url = `https://accounts.zoho.in/oauth/v2/token?code=${code}&grant_type=authorization_code&scope=${scope}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}`;
    const response = await fetch(url, { method: "POST" });
    const data = await response.json();
    return data;
}
app.post("/getAllProjects", async (req, res) => {
    let { clientId } = req.body; 
    console.log("Fetching projects for client:", clientId);
    try {
        let projectList = await getProjectList(clientId);
        let date = new Date().getTime();

        for (let project of projectList) {
            if (project.auto_regeneration === 1 && (+project.created_time + 3600000) <= date) {
                let tokens = await getTokenFromDb(project.project_id);
                let client = await getClientDetailsFromDB(project.client_id);
                let newAccessToken = await regenerateToken(client.client_id, client.client_secret, tokens.refresh_token);
                let updateStatus = await updateAccessToken(tokens.token_id, newAccessToken);
                if (!updateStatus) return res.sendStatus(500);
                project.access_token = newAccessToken;
                project.is_valid = true;
                project.created_time = changeTime(date);
            } else {
                project.is_valid = (+project.created_time + 3600000) > date;
                project.created_time = changeTime(project.created_time);
            }
            project.auto_regeneration = project.auto_regeneration === 1;
            project.scope_list = project.scopes ? project.scopes.split(",") : [];
        }
       
        res.json({ data: projectList });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

async function getProjectList(client_id) {
    let query = "select * from project p join token t on p.project_id=t.project_id where p.client_id = ? and p.is_trashed=false";
    return new Promise((resolve, reject) => {
        connection.query(query, [client_id], (err, result) => {
            if (err) {
                console.log("GET ALL PROJECT CLIENT ID ERROR\n", err);
                reject(500);
            }
            resolve(result);
        })
    })
}

async function getTokenFromDb(projectId) {
    let query = "select * from token t join project p on t.project_id = p.project_id where p.is_trashed=false and p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAIL ERROR", err);
            }
            resolve(result[0]);
        })
    })
}
async function getClientDetailsFromDB(clientId) {
    console.log("hi")
    let query = "select * from client where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [clientId], (err, result) => {
            if (err) {
                console.log("GET CLIENT ID FROM DB ERROR \n", err);
                reject(500);
            }
            resolve(result[0]);
        })
    })
}

async function regenerateToken(clientId, clientSecret, refreshToken) {
    let response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "refresh_token",
            refresh_token: refreshToken
        })
    })
    let newToken = await response.json();
    console.log(newToken)
    return newToken.access_token;
}
async function updateAccessToken(tokenId, accessToken) {
    let query = "update token set access_token = ?, created_time = ? where token_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [accessToken, new Date().getTime(), tokenId], (err, result) => {
            if (err) {
                console.log("UPDATE ACCESS TOKEN ERROR", err)
                reject(500)
            }
            resolve(result.affectedRows === 1);
        })
    })
}

function changeTime(time) {
    // console.log(time)
    return new Date(+time).toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "short"
    }).toString();
}


app.post("/regenerateToken", async (req, res) => {
    let { projectId } = req.body;
    try {
        let tokens = await getTokenFromDb(projectId);
        // console.log(tokens.refresh_token)
        let project = await getProjectDetailsFromDb(projectId);
        // console.log(project)
        let client = await getClientDetailsFromDB(project.client_id);
        // console.log(client.client_id,client)
        let newAccessToken = await regenerateToken(client.client_id, client.client_secret, tokens.refresh_token);
        let updateStatus = await updateAccessToken(tokens.token_id, newAccessToken);
        if (updateStatus) {
            return res.json(newAccessToken);
        }
        res.sendStatus(404);
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
})

async function getProjectDetailsFromDb(projectId) {
    let query = "select * from project p join token t on p.project_id = t.project_id where p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAILS ERR\n", err)
                reject(500);
            }
            resolve(result[0]);
        })
    })
}

async function getLogFromDb() {
    let query = "select * from log";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log("GET LOG FROM DB ERROR", err)
                reject(500);
            }
            resolve(result)
        })

    })
}

app.post("/restoreClient", async (req, res) => {
    console.log("======>came inside restoreClient")
    let {id}  = req.body;
    console.log(id)
    try {
        let restoreStatus = await restoreClient(id);
        
        if (restoreStatus) {
            return res.sendStatus(200);
        }
        res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

async function restoreClient(id) {
    const updateQuery = "UPDATE client SET is_trashed = 0 WHERE id = ?";
    const deleteTrashQuery = "DELETE FROM client_trash WHERE client_id = ?";

    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) return reject(err);

            connection.query(updateQuery, [id], (err, result) => {
                if (err) return connection.rollback(() => reject(err));

                connection.query(deleteTrashQuery, [id], (errrr, result2) => {
                    if (errrr) return connection.rollback(() => reject(errrr));

                    connection.commit((err) => {
                        if (err) return connection.rollback(() => reject(err));
                        resolve(true);
                    });
                });
            });
        });
    });
}

app.post("/restoreProject", async (req, res) => {
    console.log("======>came inside restoreProject")
    let {client_id,id}  = req.body;
    console.log(req.body)
    try {
        let restoreStatus = await restoreProject(client_id,id);
        if (restoreStatus) {
            return res.sendStatus(200);
        }
        res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})
async function restoreProject(client_id, project_id) {
    console.log("===="+client_id,project_id)
    const clientCheckQuery = "SELECT is_trashed FROM client WHERE id = ?";
    const restoreProjectQuery = "UPDATE project SET is_trashed = false WHERE project_id = ?";
    const deleteProjectTrashQuery = "DELETE FROM project_trash WHERE project_id = ?";

    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                console.log("RESTORE PROJECT TRANSACTION ERROR \n", err);
                return reject(500);
            }

            connection.query(clientCheckQuery, [client_id], async (err, result) => {
                if (err) {
                    console.log("ERROR: Failed to check if client is trashed.", err);
                    return connection.rollback(() => reject(500));
                }
                console.log(result+"km")
                if ( result[0].is_trashed) {
                    try {
                        let restoreClientStatus = await restoreClientForProject(client_id);
                        if (!restoreClientStatus) {
                            return connection.rollback(() => reject("Failed to restore client"));
                        }
                    } catch (err) {
                        return connection.rollback(() => reject("Client restore failed"));
                    }
                }

                connection.query(restoreProjectQuery, [project_id], (err, result) => {
                    if (err) {
                        console.log("ERROR: Failed to restore project.", err);
                        return connection.rollback(() => reject(500));
                    }

                    connection.query(deleteProjectTrashQuery, [project_id], (err, result3) => {
                        if (err) {
                            console.log("ERROR: Failed to delete project from trash.", err);
                            return connection.rollback(() => reject(500));
                        }

                        connection.commit((err) => {
                            if (err) {
                                console.log("ERROR: Failed to commit transaction.", err);
                                return connection.rollback(() => reject(500));
                            }
                            resolve(true); 
                        });
                    });
                });
            });
        });
    });
}

async function restoreClientForProject(client_id) {
    const restoreClientQuery = "UPDATE client SET is_trashed = false WHERE id = ?";
    const deleteClientTrashQuery = "DELETE FROM client_trash WHERE client_id = ?";

    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                console.log("RESTORE CLIENT TRANSACTION ERROR \n", err);
                return reject(500);
            }

            connection.query(restoreClientQuery, [client_id], (err, result) => {
                if (err) {
                    console.log("ERROR: Failed to restore client.", err);
                    return connection.rollback(() => reject(500));
                }

                connection.query(deleteClientTrashQuery, [client_id], (err1, result1) => {
                    if (err1) {
                        console.log("ERROR: Failed to delete client from trash.", err1);
                        return connection.rollback(() => reject(500));
                    }

                    connection.commit((err) => {
                        if (err) {
                            console.log("ERROR: Failed to commit client restore transaction.", err);
                            return connection.rollback(() => reject(500));
                        }
                        resolve(true); 
                    });
                });
            });
        });
    });
}

app.post("/permanentlyDeleteClient", async (req, res) => {
    const {id} = req.body;
    console.log(req.body)

    try {
        const result = await permanentlyDeleteClient(id);
        console.log(result)
        res.json({ 
            message: "Client premnanely deleted", 
        });
    } catch (err) {
        res.sendStatus(500);
    }
})


function permanentlyDeleteClient(client_id){
    return new Promise((resolve, reject) => {
        const del_client_trash = "delete from client_trash where client_id=?";
        const del_client = "delete from client where id=? and  is_trashed=1";
        const del_project = "delete p,pt from project p join project_trash pt on p.project_id=pt.project_id where p.client_id=?"
        connection.query(del_client_trash, [client_id],(err, result) => {
            if(err){
                console.log("DELETE CLIENT TRANSACTION ERROR\n", err)
                reject(500);
            }
            connection.query(del_client, [client_id],(err, result) => {
                if(err){
                    console.log(err)
                    return connection.rollback(() => reject(500))
                }
                else if(result){
                    connection.query(del_project, [client_id],(err, result) => {
                        if(err){
                            console.log(err)
                            return connection.rollback(() => reject(500))
                        }
                        if(result){
                            connection.commit((err) => {
                                if (err) {
                                    console.log(err);
                                    return connection.rollback(() => reject(500))
                                }
                                resolve(true);
                            })
                        }

                    })
                }
                
            });
            
        })
    });
}

app.post("/permanentlyDeleteProject", async (req, res) => {
    const {id} = req.body;
    console.log("==========")
    console.log(req.body)

    try {
        const result = await permanentlyDeleteProject(id);
        console.log(result)
        res.json({ 
            message: "Project premnanely deleted", 
        });
    } catch (err) {
        res.sendStatus(500);
    }
})

function permanentlyDeleteProject(project_id){
    return new Promise((resolve, reject) => {
        const del_project_trash = "delete from project_trash where project_id=?";
        const del_project = "delete from project where project_id=? and is_trashed=1";

        connection.query(del_project_trash, [project_id],(err, result) => {
            if(err){
                console.log("DELETE PROJECT TRANSACTION ERROR\n", err)
                reject(500);
            }
            connection.query(del_project, [project_id],(err, result) => {
                if(err){
                    console.log(err)
                    return connection.rollback(() => reject(500))
                }
                else if(result){
                    
                    connection.commit((err) => {
                        if (err) {
                            console.log(err);
                            return connection.rollback(() => reject(500))
                        }
                        resolve(true);
                    })
                }

                
                
            });
            
        })
    });
}


app.post("/clearClientTrash", async (req, res) => {
    console.log("Cleared!!")
    console.log(req.body)
    try {
        const result = await clearClientTrash();
        const result1 = await clearProjectTrash();
        res.sendStatus(200)
        return
    } catch (err) {
        res.sendStatus(500);
    }
});


function clearProjectTrash() {
    return new Promise((resolve, reject) => {
        // const deleteProjectTrash = "delete from project_trash";
        // const deleteProjects = "delete p,pt from project p join project_trash pt on p.project_id=pt.project_id where p.is_trashed = 1 ";
        const deleteProjectTrash = "delete from project_trash";
        const deleteProjects = "delete from project where is_trashed = 1";

        connection.beginTransaction(err => {
            if (err) {
                console.error("BEGIN TRANSACTION ERROR", err);
                return reject(500);
            }

            connection.query(deleteProjects, (err, result) => {
                if (err) {
                    console.error("Project DELETE ERROR", err);
                    return connection.rollback(() => reject(500));
                }


                connection.query(deleteProjectTrash, (err, result) => {
                    if (err) {
                        console.error("PROJECT TRASH DELETE ERROR", err);
                        return connection.rollback(() => reject(500));
                    }

                    connection.commit(commitErr => {
                        if (commitErr) {
                            console.error("COMMIT ERROR", commitErr);
                            return connection.rollback(() => reject(500));
                        }

                        resolve(true);
                    })
                });
            });
        });
    });
}


function clearClientTrash() {
    return new Promise((resolve, reject) => {
        // const deleteProjectTrash = "delete from project_trash";
        // const deleteProjects = "delete p,pt from project p join project_trash pt on p.project_id=pt.project_id where p.is_trashed = 1 ";
        const deleteClientTrash = "delete from client_trash";
        const deleteClients = "delete from client where is_trashed = 1";

        connection.beginTransaction(err => {
            if (err) {
                console.error("BEGIN TRANSACTION ERROR", err);
                return reject(500);
            }

            connection.query(deleteClients, (err, result) => {
                if (err) {
                    console.error("CLIENT DELETE ERROR", err);
                    return connection.rollback(() => reject(500));
                }


                connection.query(deleteClientTrash, (err, result) => {
                    if (err) {
                        console.error("CLIENT TRASH DELETE ERROR", err);
                        return connection.rollback(() => reject(500));
                    }

                    connection.commit(commitErr => {
                        if (commitErr) {
                            console.error("COMMIT ERROR", commitErr);
                            return connection.rollback(() => reject(500));
                        }

                        resolve(true);
                    })
                });
            });
        });
    });
}


app.post("/deleteProject", async (req, res) => {
    let { project_id } = req.body;
    console.log(req.body)
    try {
        let project = await getProjectDetailsFromDb(project_id);
        let deleteStatus = await deleteProject(project_id);
        if (deleteStatus) {
            // let client = await getClientDetailsFromDB(project.client_id);
            return res.sendStatus(200)
        }
        res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

async function getProjectDetailsFromDb(projectId) {
    let query = "select * from project p join token t on p.project_id = t.project_id where p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAILS ERR\n", err)
                reject(500);
            }
            resolve(result[0]);
        })
    })
}


async function deleteProject(projectId) {
    let query = "update project set is_trashed =1 where project_id = ?"
    let insertQuery = "insert into project_trash(deleted_date,project_id) values(?,?)"
    
    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                console.log("DELETE PROJECT TRANSACTION ERROR", err);
                reject(500);
            }

            connection.query(query, [projectId], (err, result) => {
                if (err) {
                    console.log("DELETE PROJECT IN DB ERROR", err);
                    return connection.rollback(() => reject(500));
                }
                connection.query(insertQuery, [new Date(),projectId], (err, result) => {
                    if (err) {
                        console.log("DELETE PROJECT IN DB ERROR", err);
                        return connection.rollback(() => reject(500));
                    }

                    if (result.affectedRows == 1) {
                        connection.commit((err4) => {
                            if (err4) {
                                console.log("DELETE PROJECt TRANSACTION COMMIT ERROR", err4);
                                return connection.rollback(() => reject(500));
                            }
                            resolve(true);
                        })
                    } else {
                        return connection.rollback(() => reject(500))
                    }
                })
                
            })
        })
        
    })
}


app.post("/editProject", async (req, res) => {
    let { name, description, scopes, project_id } = req.body;
    try {
        let projectDetails = await getProjectDetailsFromDb(project_id);
        let editStatus = updateProjectInDb(name, description, scopes, project_id);
        if (editStatus) {
            return res.json({ "is_scope_changed": projectDetails.scopes == scopes })

        }
        res.sendStatus(404)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})
app.get("/getProject", async (req, res) => {
    let { projectId } = req.query
    console.log("======================")
    try {
        let project = await getProjectDetailsFromDb(projectId)
        if(project){
        project.is_valid = (+project.created_time + 3600000) > new Date().getTime();
        project.auto_regeneration = (project.auto_regeneration == 1);
        project.created_time = changeTime(project.created_time);
        res.json({ "data": [project] });
        }else{
            res.json({"data":[]})
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})


async function getProjectDetailsFromDb(projectId) {
    let query = "select * from project p join token t on p.project_id = t.project_id where p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAILS ERR\n", err)
                reject(500);
            }
            resolve(result[0]);
        })
    })
}
async function updateProjectInDb(name, description, scope, project_id) {
    let query = "update project set name=? , description = ?,scopes = ? where project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [name, description, scope, project_id], (err, result) => {
            if (err) {
                console.log("UPDATE PROJECT IN DB ERROR", err);
                reject(500);
            }
            resolve(result.affectedRows === 1);
        })
    })
}




async function getProjectDetailsFromDb(projectId) {
    let query = "select * from project p join token t on p.project_id = t.project_id where p.project_id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [projectId], (err, result) => {
            if (err) {
                console.log("GET PROJECT DETAILS ERR\n", err)
                reject(500);
            }
            resolve(result[0]);
        })
    })
}

app.post('/editClient', async (req, res) => {
    let { name, description, clientId } = req.body;
    // console.log(name, description)
    try {
        let updateStatus = await updateClientInDb(name, description, clientId);
        res.sendStatus(updateStatus ? 200 : 404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

async function updateClientInDb(name, description, client_id) {
    let query = "update client set name =?,description = ? where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [name, description, client_id], (err, result) => {
            if (err) {
                console.log("UPDATE CLIENT IN DB ERROR\n", err)
                reject(500)
            }
            resolve(result.affectedRows == 1);
        })
    })
}

app.post("/deleteClient", async (req, res) => {
    let { clientId } = req.body;
    try {
        let deleteStatus = await deleteClient(clientId);
        if (deleteStatus) {
            return res.sendStatus(200);
        }
        res.sendStatus(404)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

async function deleteClient(clientId) {
    console.log("indelete client");
    let query = "update client set is_trashed=true where id = ?";
    let trashQuery = "insert into client_trash (deleted_date,client_id) values (?,?)"
    // let deleteProject = "update project set is_trashed =1 where client_id = ?"
    let deleteProjectQuery = "select project_id from project where client_id = ?";
    return new Promise((resolve, reject) => {

        connection.beginTransaction((err) => {
            if (err) {
                console.log("DELETE CLIENT TRANSACTION ERROR", err);
                reject(500);
            }

            connection.query(query, [clientId], (err, result) => {

                if (err) {
                    console.log("DELETE CLIENT UPDATE IS TRASHED ERROR\n", err);
                    return connection.rollback(() => reject(500));
                }
                if (result.affectedRows == 1) {
                    connection.query(trashQuery, [new Date().toISOString().split("T")[0], clientId], (errr, result2) => {

                        if (errr) {
                            console.log("INSERT IN CLIENT TRASH ERROR \n", errr);
                            return connection.rollback(() => reject(500));
                        }
                        if (result2.affectedRows === 1) {
                            connection.query(deleteProjectQuery, [clientId],async (err3, result3) => {
                                if (err3) {
                                    console.log("Delete PROJECT TRASH ERROR \n", err3);
                                    return connection.rollback(() => reject(500));
                                }
                                for(project of result3){
                                    await deleteProject(project.project_id)
                                }
                                    connection.commit((err4) => {
                                        if (err4) {
                                            console.log("DELETE CLIENT TRANSACTION COMMIT ERROR", err4);
                                            return connection.rollback(() => reject(500));
                                        }
                                        resolve(true);
                                    })
                                
                            })   
                        }
                    })
                }
            })
        })
    })
}

app.get("/getDashboardInfo", async (req, res) => {
    try {
        const client_count = await get_client_count();
        const project_count = await get_project_count();
        const valid_token_count = await get_valid_token_count();
        const expired_token_count = await get_expired_token_count();
        const projects_per_client = await get_projects_per_client(); // ✅ add this

        const response = {
            data: [{
                total_clients: client_count[0].total_clients,
                total_projects: project_count[0].total_projects,
                valid_tokens: valid_token_count[0].valid_tokens,
                expired_tokens: expired_token_count[0].expired_tokens,
                projects_per_client: projects_per_client // ✅ add this
            }]
        };

        res.json(response);

    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

async function get_client_count() {
    const query = "select count(*) as total_clients from client where is_trashed = 0";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log("GET client_count FROM DB ERROR", err)
                reject(500);
            }
            resolve(result)
        })

    })
}


async function get_project_count(){
    const query= "select count(*) as total_projects from project p join token t where p.project_id=t.project_id and is_trashed = 0";
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,result)=>{
            if(err){
                console.log("GET project_count FROM DB ERROR",err)
                reject(500);
            }
            resolve(result)
        })
        
    })
}
async function get_valid_token_count(){
    const query= "select count(*) as valid_tokens from token t join project p on p.project_id = t.project_id where p.is_trashed=0 and t.created_time >= unix_timestamp(now() - interval 1 hour)*1000";
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,result)=>{
            if(err){
                console.log("GET valid_token_count FROM DB ERROR",err)
                reject(500);
            }
            resolve(result)
        })
        
    })
    
}

async function get_expired_token_count(){

    const query= "select count(*) as expired_tokens from token t join project p on p.project_id = t.project_id where p.is_trashed=0 and t.created_time < unix_timestamp(now() - interval 1 hour)*1000";
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,result)=>{
            if(err){
                console.log("GET expired_token_count FROM DB ERROR",err)
                reject(500);
            }
            resolve(result)
        })
        
    })
}

function get_projects_per_client() {
    let query = `
        SELECT c.name, COUNT(p.project_id) as project_count 
        FROM client c 
        LEFT JOIN project p ON c.id = p.client_id 
        GROUP BY c.id, c.name
        ORDER BY project_count DESC
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log("GET PROJECTS PER CLIENT ERROR\n", err);
                reject(err);
            }
            resolve(result);
        });
    });
}

app.get("/getChartData", async (req, res) => {
    try {
        const token_distribution = await get_token_distribution();
        const activity_7days = await get_7day_activity();

        res.json({
            token_distribution,
            activity_7days
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

// Valid vs Expired for pie chart
function get_token_distribution() {
    let query = `
        SELECT 
            SUM(CASE WHEN t.created_time >= UNIX_TIMESTAMP(NOW() - INTERVAL 1 HOUR)*1000 THEN 1 ELSE 0 END) as valid_tokens,
            SUM(CASE WHEN t.created_time < UNIX_TIMESTAMP(NOW() - INTERVAL 1 HOUR)*1000 THEN 1 ELSE 0 END) as expired_tokens
        FROM token t
        JOIN project p ON p.project_id = t.project_id
        WHERE p.is_trashed = 0
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) { console.log(err); reject(err); }
            resolve(result[0]);
        });
    });
}

// Last 7 days created/deleted tokens for bar chart
function get_7day_activity() {
    let query = `
        SELECT 
            DAY(FROM_UNIXTIME(t.created_time/1000)) as day,
            COUNT(*) as created
        FROM token t
        JOIN project p ON p.project_id = t.project_id
        WHERE p.is_trashed = 0
        AND t.created_time >= UNIX_TIMESTAMP(NOW() - INTERVAL 7 DAY)*1000
        GROUP BY DAY(FROM_UNIXTIME(t.created_time/1000))
        ORDER BY day ASC
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) { console.log(err); reject(err); }
            resolve(result);
        });
    });
}

app.post("/ask_bot",async(req,response)=>{
let question = req.body.question;
console.log(question)
let request = await fetch("https://rag-ai-bot-elpx.onrender.com/ai_chat/ask",{
    method:"POST",
    headers :{
        // "accept": "application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        prompt : question,
        "x-api-key": "772cbccfd85e08af22020478c8ed55fbf6587b15753c56bc6bb82446d989e80b"
    })
})

let res = await request.json();
// console.log(res)
let answer=res.response;
// console.log(answer)/
response.json(answer);
})

