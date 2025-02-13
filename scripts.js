document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.from('header', { duration: 1, y: '-100%', ease: 'power2.out' });
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

    // Add scrolling animations for 'About Us' sections
    ['#about-part1', '#about-part2', '#about-part3'].forEach(function(id, index) {
        console.log('Setting up animation for:', id);
        gsap.from(id, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: 'power2.out',
            delay: index * 0.5
        });

        new ScrollMagic.Scene({
            triggerElement: id,
            triggerHook: 0.9,
            reverse: false
        })
        .setClassToggle(id, 'fade-in')
        .addTo(controller);
    });
});

document.querySelectorAll('.tab-link').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        console.log('Hovering over:', this.textContent);
    });
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
        ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}); 