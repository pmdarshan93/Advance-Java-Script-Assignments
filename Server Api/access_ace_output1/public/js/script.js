let client_container = document.getElementById("client_container");
let add_client_btn = document.getElementById("add_new_client");
let cancel_btn = document.querySelector(".cancel");

add_client_btn.addEventListener("click", () => {
    let add_client_form = document.getElementById("form_container");
    add_client_form.style.display = "flex";
})
cancel_btn.addEventListener("click", () => {
    let add_client_form = document.getElementById("form_container");
    add_client_form.style.display = "none";
})
// get all clients
async function getAllClients() {
    let request = await fetch("/AllClients");
    let list = await request.json();
    console.log(list);
    list.data.forEach(clients => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2 class="card-name">${clients.name}</h2>
            <h4 class="card-desc">${clients.description}</h4>
            <hr>
            <p class="card-link">View →</p>
        `;
        card.addEventListener('click', () => {
            console.log(clients.id);
            loadClientOverview(clients.id);
        });
        client_container.appendChild(card);
    });
}


//add client
function addClient(client_name, client_desc, client_id, client_secret) {
    
    fetch("/AddClient", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: client_name,
            description: client_desc,
            client_id: client_id,
            client_secret: client_secret
        })
    })
    let add_client_form = document.getElementById("add_client_form");
    add_client_form.style.display = "none";
}

let add_client = document.getElementById("add_btn");
add_client.addEventListener("click", ()=>{
    let client_name = document.getElementById("client_name_field").value;
    let client_desc = document.getElementById("client_desc_field").value;
    let client_id = document.getElementById("client_id_field").value;
    let client_secret = document.getElementById("client_secret_field").value;
    if (client_name && client_desc && client_id && client_secret) {
        addClient(client_name, client_desc, client_id, client_secret);
    }
});


async function loadClientOverview(clientId) {
    // Fetch this specific client's data
    console.log(clientId);
    let request = await fetch(`/getClient?clientId=${clientId}`);
    let data = await request.json();
    let client = data.data[0];
    console.log(client);
    // Swap views
    document.getElementById('clients').style.display = 'none';
    document.getElementById('client_overview').style.display = 'block';
    document.querySelector('#client_overview nav h1').textContent = client.name;
    console.log(client.name);

    
    const projectDetails = document.getElementById('project_details');
    projectDetails.innerHTML = '';

    let project_request = await fetch(`/getAllProjects?clientId=${clientId}`);
    let project_data = await project_request.json();
    let project = project_data.data;
    console.log("project",project);
    project.forEach(proj => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${proj.name}</h3>
            <p class="token">${proj.access_token}</p>
            <p class="${proj.is_valid ? 'valid-token' : 'expired-token'}">${proj.is_valid ? "Valid" : "Expired"}</p>
            <p class="created_time">${proj.created_time}</p>
        `;
        projectDetails.appendChild(projectCard);
    });
    document.getElementById("client_info_btn").addEventListener("click", () => {
        console.log("Cliend id",clientId)
        loadClientInfo(clientId);

    })
}

async function loadClientInfo(clientId) {
    let request = await fetch(`/getClient?clientId=${clientId}`);
    let data = await request.json();
    let client = data.data[0];
    console.log(client);

    document.getElementById('client_overview').style.display = 'none';
    document.getElementById('client_info').style.display = 'block';
    document.querySelector('#client_info .header div h1').textContent = client.name;
    document.querySelector('#client_info .header div p').textContent = client.description;

    document.getElementById('client-id').textContent = client.client_id;
    document.getElementById('client-secret').textContent = client.client_secret;


    let project_request = await fetch(`/getAllProjects?clientId=${clientId}`);
    let project_data = await project_request.json();
    let project = project_data.data;
    let projectDetails = document.getElementById('projects-container')
    console.log("project 1",project);
    project.forEach(proj => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project_card_info';
        projectCard.innerHTML = `
        <h3>${proj.name}</h3>
        <p class="created_time">${proj.created_time}</p>
        <p class="${proj.is_valid ? 'valid-token' : 'expired-token'}">${proj.is_valid ? "Valid" : "Expired"}</p>
        `;
        projectDetails.appendChild(projectCard);
    });
}
//init function for calling
function init(){
    getAllClients();
}
init();