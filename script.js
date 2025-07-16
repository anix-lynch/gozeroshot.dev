// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            // Remove active class from all slots
            timeSlots.forEach(s => s.classList.remove('active'));
            // Add active class to clicked slot
            this.classList.add('active');
            
            // Simple booking action (replace with actual booking system)
            const time = this.textContent;
            alert(`Great! I'll send you a calendar invite for ${time}. Check your email in a few minutes.`);
        });
    });

    // Video placeholder click
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Replace with actual video embed or modal
            alert('Video would open here. Replace with Loom embed or YouTube video.');
        });
    }

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(254, 252, 246, 0.98)';
        } else {
            nav.style.background = 'rgba(254, 252, 246, 0.95)';
        }
    });

    // Simple form validation (if you add contact forms later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#f87171';
                    isValid = false;
                } else {
                    input.style.borderColor = '#d1d5db';
                }
            });
            
            if (isValid) {
                // Replace with actual form submission
                alert('Form submitted! I\'ll get back to you within 24 hours.');
                form.reset();
            }
        });
    });

    // Add loading states to buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large, .hero-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't prevent default for navigation links
            if (this.href && this.href.includes('#')) {
                return;
            }
            
            // Add loading state for external links
            if (this.href && !this.href.includes(window.location.hostname)) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
});

// Add CSS for active time slot
const style = document.createElement('style');
style.textContent = `
    .time-slot.active {
        background: var(--blue-main) !important;
        color: var(--white) !important;
        border-color: var(--accent) !important;
    }
`;
document.head.appendChild(style);