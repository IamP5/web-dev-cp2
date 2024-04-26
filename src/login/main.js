const FORM = document.getElementById('login-form');

FORM.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(FORM);
  const username = data.get('username');
  const password = data.get('password');

  if (username === '1234' && password === '1234') {
    clearInputs();
    window.location.assign(window.location.origin + '/src' + "/home");
  } else {
    clearInputs();
    document.getElementById('error-message').innerText = 'Invalid username or password.';
  }
});

function clearInputs() {
  FORM.reset();
}
