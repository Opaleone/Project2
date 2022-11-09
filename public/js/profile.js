const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#character-name').value.trim();
    const description = document.querySelector('#character-desc').value.trim();
    const race = document.querySelector('#race').value.trim();
    const className = document.querySelector('#class-name').value.tirm();

    if (name && description) {
      const response = await fetch(`/api/characters`, {
        method: 'POST',
        body: JSON.stringify({ name, description, race, className }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to display character');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete character');
      }
    }
  };
  
  document
    .querySelector('.new-character')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.character-list')
    .addEventListener('click', delButtonHandler);
  