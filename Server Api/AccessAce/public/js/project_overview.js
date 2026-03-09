const editBtn = document.querySelector('.edit-btn');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('edit_project_form');
const cancelbtn = document.getElementById('cancel_edit_btn');

function maskToken(token) {
    return "•".repeat(token.length);
}

document.querySelectorAll(".copy-field").forEach(field => {
    const input = field.querySelector(".token-input");
    const eyeBtn = field.querySelector(".eye-btn");
    const copyBtn = field.querySelector(".copy-btn");
    const regenBtn = field.querySelector(".regenerate-btn");
    const eyeIcon = eyeBtn.querySelector("i");

    const originalToken = input.dataset.token;

    input.value = maskToken(originalToken);

    eyeBtn.addEventListener("click", () => {
        const isMasked = input.value.includes("•");

        if (isMasked) {
            input.value = originalToken;
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.value = maskToken(originalToken);
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(originalToken);
        alert("Token Copied!");
    });

    if (regenBtn) {
        regenBtn.addEventListener("click", async () => {
            const projectId = regenBtn.dataset.id;

            const response = await fetch("/regenerateToken", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ projectId })
            });

            const result = await response.json();

            if (result) {
                alert("Token Regenerated Successfully");
                location.reload();
            } else {
                alert("Regeneration Failed");
            }
        });
    }
});

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        navigator.clipboard.writeText(input.value)
            .then(() => alert("Copied to clipboard"));
    });
});

editBtn.addEventListener('click', () => {
    document.getElementById('edit_project_name').value =
        document.querySelector('h1').innerText;

    document.getElementById('edit_project_desc').value =
        document.querySelector('.project-description').innerText;

    document.getElementById('edit_scopes').value =
        document.querySelector('#scopes')?.value 
    editModal.style.display = 'flex';
});

cancelbtn.addEventListener('click', () => {
    editModal.style.display = 'none';
});

editForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const projectId = document.querySelector('.edit-btn').dataset.id;

    const name = document.getElementById('edit_project_name').value;
    const description = document.getElementById('edit_project_desc').value;
    const scopes = document.getElementById('edit_scopes').value;

    const response = await fetch('/editProject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            description,
            scopes,
            project_id: projectId
        })
    });

    if (response.ok) {
        alert("Project updated successfully!");
        location.reload();
    } else {
        alert("Failed to update project.");
    }
});

document.querySelector('.delete-btn').addEventListener('click', async (e) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    const projectId = document.querySelector('.delete-btn').dataset.id;

    const response = await fetch('/deleteProject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project_id: projectId }),
    });

    if (response.status === 200) {
        alert("Project stored in trash!");
        window.history.back();  
    } else {
        alert("Failed to delete the project.");
    }
});