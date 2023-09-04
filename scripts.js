document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the scroll offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling (you can customize this part)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Example: Log form data to the console
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // You can add your own code here to handle form submission,
    // such as sending an email or saving data to a database.

    // Clear form inputs after submission
    this.reset();
});