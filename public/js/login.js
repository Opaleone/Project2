const loginForm = document.querySelector('.login-form')

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const emailGrab = document.querySelector('#email-login').value.trim();
  const passwordGrab = document.querySelector('#password-login').value.trim();

  if (emailGrab && passwordGrab) {
    // Send a POST request to the API endpoint
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ 
        email: emailGrab, 
        password: passwordGrab 
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

loginForm.addEventListener('submit', loginFormHandler);

