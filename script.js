const btn = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    navlinks.classList.toggle('show');
});
