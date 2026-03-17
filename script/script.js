// Smooth scroll to contact form
function scrollToContact() {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth' });
}

// Simple form submission simulation
const form = document.getElementById('tripForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent.";
    form.reset();
});

const closeBtn = document.getElementById('closeBtn');
const announcement = document.getElementById('announcment');

closeBtn.addEventListener('click', () => {
  announcement.style.display = 'none';
});
