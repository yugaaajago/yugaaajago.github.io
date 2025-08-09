document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    /* Autoplay fallback */
    video.play().catch(() => {
        video.muted = true;
        video.play();
    });

    /* Header scroll effect */
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* Smooth scroll */
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* Highlight active nav */
    window.addEventListener('scroll', () => {
        const pos = window.scrollY + window.innerHeight / 2;
        let active = '';
        sections.forEach(sec => {
            if (pos >= sec.offsetTop && pos <= sec.offsetTop + sec.offsetHeight) {
                active = sec.id;
            }
        });
        navLinks.forEach(a => a.classList.toggle('active', a.hash === `#${active}`));
    });
});
