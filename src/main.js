const maiorDeIdade = window.confirm("Você possui mais de 18 anos?");

if (maiorDeIdade) {
  window.location.replace(window.location.href + "login");
} else {
  window.location.replace(window.location.href + "not-authorized");
}