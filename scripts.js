document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    

    
    this.reset();
});
