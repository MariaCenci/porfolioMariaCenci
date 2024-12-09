const form = document.getElementById('form');
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

// Gestão formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Formulário enviado!");
});

const toggleMenu = () => {
  nav.classList.toggle('active');
};

menuHamburguer.addEventListener('click', toggleMenu);

// Fecha o menu quando um link for clicado
const menuLinks = document.querySelectorAll("#menu li a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove('active');
  });
});
