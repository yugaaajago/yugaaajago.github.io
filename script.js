document.addEventListener('DOMContentLoaded', function() {
    // Video Background Setup
    const video = document.getElementById('myVideo');
    
    // Auto-play video with fallback
    function playVideo() {
        const promise = video.play();
        if (promise !== undefined) {
            promise.catch(error => {
                video.muted = true;
                video.play();
            });
        }
    }
    
    // Initialize video
    video.addEventListener('loadedmetadata', playVideo);

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const scrollPosition = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active menu item on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });

    // Set initial active link
    window.dispatchEvent(new Event('scroll'));
});