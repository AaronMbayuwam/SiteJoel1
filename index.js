// script.js
document.addEventListener('DOMContentLoaded', function() {
   
 
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            
            contactForm.reset();
        });
    }
});