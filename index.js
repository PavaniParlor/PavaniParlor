const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    menuBtn.innerHTML = mainNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        mainNav.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}));
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));