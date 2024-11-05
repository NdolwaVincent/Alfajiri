document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields after submission
});
// Optional JavaScript for additional interactivity
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#b2dfdb';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ffffff';
    });
});
