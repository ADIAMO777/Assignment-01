const btn = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

btn.addEventListener('click', () => {
    navlinks.classList.toggle('show');
});
