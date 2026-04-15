// Yale Healthcare Consulting Collective - JavaScript

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Contact form handling (if on contact page)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const statusMessage = document.getElementById('form-status');
      
      // Disable submit button during submission
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          statusMessage.textContent = 'Thank you! We\'ll be in touch soon.';
          statusMessage.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        statusMessage.textContent = 'Something went wrong. Please try again or email us directly.';
        statusMessage.className = 'form-status error';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    });
  }

  // Add active class to current page in nav
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
});
