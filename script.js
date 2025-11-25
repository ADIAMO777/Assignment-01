const btn = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));

  btn.classList.toggle('active');
  menu.classList.toggle('show');
});
