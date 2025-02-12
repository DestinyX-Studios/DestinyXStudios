document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.from('header', { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from('nav ul li', { duration: 1, opacity: 0, stagger: 0.2 });

    // Initialize ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Create a scene for each section
    document.querySelectorAll('section').forEach(function(section) {
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.9,
            reverse: false
        })
        .setClassToggle(section, 'fade-in') // Add class to section
        .addTo(controller);
    });

    // Add fun animations for sections
    gsap.from('#home', { duration: 1, opacity: 0, y: 50, ease: 'power2.out' });
    gsap.from('#about', { duration: 1, opacity: 0, x: -50, ease: 'power2.out', delay: 0.5 });
    gsap.from('#projects', { duration: 1, opacity: 0, y: 50, ease: 'power2.out', delay: 1 });
    gsap.from('#contact', { duration: 1, opacity: 0, x: 50, ease: 'power2.out', delay: 1.5 });
});

document.querySelectorAll('.tab-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tabId = this.getAttribute('data-tab');

        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-link').forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(function(content) {
            content.classList.remove('active');
        });

        // Add active class to the clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
}); 