document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}!\nEmail: ${email}\nMessage: ${message}\nWork in progress, Please try to send Mail or message in LinkedIn.`);
    // Here you can add code to send the form data to your server
    this.reset(); // Reset the form after submission
});