const btn = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');   // animate hamburger
  navlinks.classList.toggle('show'); // show/hide menu
});

