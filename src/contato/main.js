const FORM = document.getElementById('login-form');

FORM.addEventListener('submit', function (event) {
  event.preventDefault();

  alert('Mensagem enviada com sucesso!');
  clearInputs();

  window.location.assign(window.location.origin + '/src/home');
});

function clearInputs() {
  FORM.reset();
}
