const projectContainer = document.getElementById("project_container");
const addProjectBtn = document.getElementById("add_new_project");
const formContainer = document.getElementById("form_container");
const cancelBtn = document.querySelector(".cancel");
const addBtn = document.getElementById("add_btn");

console.log(currentClientId)
console.log(addProjectBtn)

function maskToken(token) {
    return "•".repeat(token.length);
}

async function getCurrentClient(clientId) {
    
    try {
        let request = await fetch(`/getClient?clientId=${clientId}`);
        let data = await request.json();
        console.log("CALLED")
        let client = data.data[0];
        
        console.log(client+"====================");
        document.querySelector('#client-header-info h1').textContent = client.name;
        document.querySelector('#client-header-info p').textContent = client.description;
        console.log(client.name);
    } catch (err) {
        console.error("Error fetching client data:", err);
    }

}
getCurrentClient(currentClientId)
document.getElementById('client_info_btn').addEventListener('click', () => {
    window.location.href = `/clientInfo?clientId=${currentClientId}`;
});
addProjectBtn.addEventListener("click", () => {
    formContainer.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
});




async function getAllProjects(clientId) {
    try {
        const response = await fetch("/getAllProjects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ clientId })
        });

        const data = await response.json();
        projectContainer.innerHTML = "";

        data.data.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("projectCard");

            const title = document.createElement("h2");
            title.textContent = project.name || "Unnamed Project";

            const desc = document.createElement("p");
            desc.textContent = project.description || "";

            const infoIcon = document.createElement("i");
            infoIcon.classList.add("fa-solid", "fa-info-circle", "infoIcon");
            infoIcon.addEventListener("click", () => {
                window.location.href = `/project_overview?projectId=${project.project_id}`;

            });

            const tokenWrapper = document.createElement("div");
            tokenWrapper.classList.add("tokenWrapper");

            const tokenBox = document.createElement("div");
            tokenBox.classList.add("tokenBox");

            tokenBox.textContent = project.access_token ? maskToken(project.access_token) : "No Token";

            const btnContainer = document.createElement("div");
            btnContainer.classList.add("btnContainer");

            const eyeBtn = document.createElement("button");
            eyeBtn.classList.add("iconBtn");
            const eyeIcon = document.createElement("i");
            eyeIcon.classList.add("fa-regular", "fa-eye");
            eyeBtn.appendChild(eyeIcon);

            eyeBtn.addEventListener("click", () => {
                let isVisible = tokenBox.textContent !== project.access_token;
                tokenBox.textContent = isVisible ? project.access_token : maskToken(project.access_token);
                eyeIcon.classList.toggle("fa-eye");
                eyeIcon.classList.toggle("fa-eye-slash");
            });

            const copyBtn = document.createElement("button");
            copyBtn.classList.add("iconBtn");
            const copyIcon = document.createElement("i");
            copyIcon.classList.add("fa-regular", "fa-copy");
            copyBtn.appendChild(copyIcon);

            copyBtn.addEventListener("click", () => {
                if (project.access_token) {
                    navigator.clipboard.writeText(project.access_token);
                    alert("Token Copied!");
                }
            });

            const regenerateBtn = document.createElement("button");
            regenerateBtn.classList.add("iconBtn");
            const regenIcon = document.createElement("i");
            regenIcon.classList.add("fa-solid", "fa-rotate");
            regenerateBtn.appendChild(regenIcon);

            regenerateBtn.addEventListener("click", async () => {
                const response = await fetch("/regenerateToken", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ projectId: project.project_id })
                });
                const result = await response.json();
                if (result) {
                    alert("Token Regenerated Successfully");
                    window.location.reload();
                } else {
                    alert("Regeneration Failed");
                }
            });

            btnContainer.appendChild(eyeBtn);
            btnContainer.appendChild(copyBtn);
            btnContainer.appendChild(regenerateBtn);
            tokenWrapper.appendChild(tokenBox);
            tokenWrapper.appendChild(btnContainer);

            card.appendChild(infoIcon);  
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(tokenWrapper);

            projectContainer.appendChild(card);
        });
    } catch (err) {
        console.error("Error fetching projects:", err);
    }
}
getAllProjects(currentClientId);


addBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.getElementById("project_name").value;
    const description = document.getElementById("project_desc").value;
    const scopes = document.getElementById("scopes").value;
    const redirect_uri = "http://localhost:2500/getcode";

    try {
        const response = await fetch("/storedata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                clientId: currentClientId,
                name,
                description,
                scopes,
                redirect_uri
            })
        });

        const result = await response.json();

        const state = encodeURIComponent(JSON.stringify({
            projectId: result.projectId
        }));

        window.location.href =
            `https://accounts.zoho.in/oauth/v2/auth` +
            `?scope=${encodeURIComponent(scopes)}` +
            `&client_id=${result.client_id}` +
            `&response_type=code` +
            `&access_type=offline` +
            `&prompt=consent` +
            `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
            `&state=${state}`;

    } catch (err) {
        console.error(err);
        alert("Server Error");
    }
});


document.getElementById("delete_btn").addEventListener("click", () => {
    if (!confirm("Are you sure you want to delete this client?")) return;

    fetch("/deleteClient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId: currentClientId })
    })
    .then(res => {
        if (res.ok) {
            window.location.href = "/";
        } else {
            console.log("Delete failed:", res.status);
        }
    })
    .catch(err => console.log("Error:", err));
});
