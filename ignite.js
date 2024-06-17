document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Smooth scroll to about section on button click
    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        window.scrollTo({
            top: aboutSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
