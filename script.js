// Intersection Observer for fading in elements like ghosts in the dark
document.addEventListener('DOMContentLoaded', () => {
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before it comes into full view
        threshold: 0.1 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scrolling for eerie navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Random stutter effect for the flickering title to make it feel like a dying bulb
    const flickers = document.querySelectorAll('.flickering');
    setInterval(() => {
        flickers.forEach(el => {
            if (Math.random() > 0.9) {
                el.style.animationPlayState = 'paused';
                setTimeout(() => {
                    el.style.animationPlayState = 'running';
                }, Math.random() * 500);
            }
        });
    }, 2000);
});
