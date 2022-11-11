const signupForm = document.querySelector('.signup-form')

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