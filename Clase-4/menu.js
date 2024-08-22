document.getElementById('hamburger-btn').addEventListener('click', function () {
  document.getElementById('navbar-links').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbarLinks = document.getElementById('navbar-links');

  hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
});