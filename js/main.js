// Smooth Scrolling für die Navigation
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Header-Bild Parallax-Effekt
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-image');
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
});