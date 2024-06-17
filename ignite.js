document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50, // Adjust offset for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Smooth scroll to about section on button click
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (name && email && message) {
                if (emailPattern.test(email)) {
                    alert('Thank you for your message!');
                    contactForm.reset();
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
