document.querySelectorAll('.restore-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      const id = e.target.dataset.id;
      const type = e.target.dataset.type;
      
      const client_id = e.target.dataset.clientId;
  
      let endpoint = type === 'client' ? '/restoreClient' : '/restoreProject';
  
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ id, client_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 200) {
        alert(`${type} Restored!`);
        location.reload();  
      } else {
        alert(`Failed to restore ${type}`);
      }
    });
});
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      const id = e.target.dataset.id;
      const type = e.target.dataset.type;
  
      let endpoint = type === 'client' ? '/permanentlyDeleteClient' : '/permanentlyDeleteProject';
  
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 200) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Permanently Deleted!`);
        location.reload();  
      } else {
        alert(`Failed to delete ${type} permanently`);
      }
    });
  });
  
document.querySelector('.clear-trash-btn').addEventListener('click', async () => {
    const response = await fetch('/clearClientTrash', { method: 'POST' });
    console.log(response)
    if (response.status === 200) {
      alert('Trash Cleared!');
      location.reload();  
    } else {
      alert('Failed to clear trash');
    }
});