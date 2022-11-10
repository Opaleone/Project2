const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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
  
const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log('ding')

  const usernameGrab = document.querySelector('#name-signup').value.trim();
  const emailGrab = document.querySelector('#email-signup').value.trim();
  const passwordGrab = document.querySelector('#password-signup').value.trim();

  if (usernameGrab && emailGrab && passwordGrab) {
    const response = await fetch('api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameGrab, 
        email: emailGrab, 
        password: passwordGrab,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
      console.error(response);
    }
  }
};

signupForm.addEventListener('submit', signupFormHandler);
// loginForm.addEventListener('click', loginFormHandler);

