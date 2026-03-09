function makeMasked(str) {
    return "•".repeat(str.length);
}

function addEyeToggle(fieldEl, toggleBtnEl, realValue) {
    let visible = false;

    fieldEl.textContent = makeMasked(realValue);
    fieldEl.classList.add("masked");

    const eyeIcon = toggleBtnEl.querySelector("i");

    toggleBtnEl.addEventListener("click", () => {
        visible = !visible;
        if (visible) {
            fieldEl.textContent = realValue;
            fieldEl.classList.remove("masked");
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            fieldEl.textContent = makeMasked(realValue);
            fieldEl.classList.add("masked");
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
}


async function loadClientInfo(clientId) {
    let clientRequest = await fetch(`/getClient?clientId=${clientId}`);
    let clientData = await clientRequest.json();
    let client = clientData.data[0];
    document.getElementById("client_info").style.display = "block"
    const response = await fetch("/getAllProjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId })
    });

    const data = await response.json();

    console.log("hi",client);
    document.querySelector('#client_info .header div h1').textContent = client.name;
    document.querySelector('#client_info .header div p').textContent = client.description;

    const clientIdEl = document.getElementById('client-id');
    const clientSecretEl = document.getElementById('client-secret');

    addEyeToggle(clientIdEl, document.getElementById('toggle-client-id'),     client.client_id);
    addEyeToggle(clientSecretEl, document.getElementById('toggle-client-secret'), client.client_secret);

    const container = document.getElementById('projects-container');
    data.data.forEach(proj => {
        const card = document.createElement('div');
        card.classList.add('project_card_info');

        const name = document.createElement('h3');
        name.textContent = proj.name;

        const createdTime = document.createElement('p');
        createdTime.classList.add('created_time');
        createdTime.textContent = proj.created_time;

        const status = document.createElement('p');
        status.classList.add(proj.is_valid ? 'valid-token' : 'expired-token');
        status.textContent = proj.is_valid ? 'Valid' : 'Expired';

        card.appendChild(name);
        card.appendChild(createdTime);
        card.appendChild(status);
        container.appendChild(card);
    });
    document.querySelector(".edit_client_btn").addEventListener("click", () => {
        openEditForm(client.name, client.description);
        console.log("@@@@@@@")
    });
}
loadClientInfo(currentClientId);

function openEditForm(client_name, client_desc, client_id) {
    document.getElementById("edit_client_name_field").value = client_name;
    document.getElementById("edit_client_desc_field").value = client_desc;
    // document.getElementById("edit_form_container").dataset.clientId = client_id;

    document.getElementById("edit_form_container").style.display = "flex";
}

function closeEditForm() {
    document.getElementById("edit_form_container").style.display = "none";
}

function editClient(client_name, client_desc, client_id) {
    fetch("/editClient", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: client_name,
            description: client_desc,
            clientId: client_id
        })
    });
    window.location.reload();
    console.log("edited");
    closeEditForm();
}

document.getElementById("edit_btn").addEventListener("click", () => {
    let client_name = document.getElementById("edit_client_name_field").value;
    let client_desc = document.getElementById("edit_client_desc_field").value;

    console.log("clientId:", currentClientId); // check this is correct
    setTimeout(() => {
        console.log('This message is delayed by 2 seconds.');
    }, 2000);
    if (client_name && client_desc) {
        editClient(client_name, client_desc, currentClientId);
    }
});
document.getElementById("edit_client_form").addEventListener("submit", (e) => {
    e.preventDefault();
});