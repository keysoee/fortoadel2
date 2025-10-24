// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize scripts on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .stat, .about-text, .contact-info, .contact-form');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize EmailJS
    if (typeof window.emailjsConfig === 'undefined' || !window.emailjsConfig.publicKey || window.emailjsConfig.publicKey === 'GANTI_DENGAN_PUBLIC_KEY_ANDA') {
        console.error("Konfigurasi EmailJS tidak ditemukan atau belum diisi. Silakan periksa js/emailjs-config.js");
        
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Fitur pengiriman email belum dikonfigurasi. Silakan hubungi pemilik situs.');
            });
        }
        return;
    }

    emailjs.init(window.emailjsConfig.publicKey);

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const thankYouCard = document.getElementById('thankYouCard');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Change button state to "Sending..."
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

            // Prepare template parameters from form data
            const templateParams = {
                Nama: document.getElementById('name').value,
                Email: document.getElementById('email').value,
                Subjek: document.getElementById('subject').value,
                Pesan: document.getElementById('message').value,
            };

            // Send email using EmailJS
            emailjs.send(window.emailjsConfig.serviceID, window.emailjsConfig.templateID, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Hide form and show thank you card
                    contactForm.style.display = 'none';
                    if (thankYouCard) {
                        thankYouCard.style.display = 'block';
                    }

                    // Reset form fields
                    contactForm.reset();

                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Submit';

                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Gagal mengirim pesan. Silakan coba lagi.');

                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Submit';
                });
        });
    }

    // Initialize theme
    setTheme(getTheme());
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 100);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    const speed = scrolled * 0.5;
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${speed}px)`;
    });
});

// Skills hover effect enhancement
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// Function to reset the form and show it again
function resetForm() {
    const contactForm = document.getElementById('contactForm');
    const thankYouCard = document.getElementById('thankYouCard');

    if (contactForm && thankYouCard) {
        thankYouCard.style.display = 'none';
        contactForm.style.display = 'block';
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '300px',
        animation: 'slideInRight 0.3s ease'
    });
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.close-btn');
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '1.2rem';
    closeBtn.style.cursor = 'pointer';
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        font-family: 'Poppins', sans-serif;
    }
`;
document.head.appendChild(style);

// Cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create cursor trail
function createCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    
    Object.assign(trail.style, {
        position: 'fixed',
        width: '6px',
        height: '6px',
        background: 'var(--primary-color)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        opacity: '0.7',
        left: mouseX + 'px',
        top: mouseY + 'px',
        animation: 'cursorTrail 0.6s ease-out forwards'
    });
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 600);
}

// Add cursor trail animation CSS
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorTrail {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(cursorStyle);

// Throttle cursor trail creation
let trailTimeout;
document.addEventListener('mousemove', () => {
    if (!trailTimeout) {
        trailTimeout = setTimeout(() => {
            createCursorTrail();
            trailTimeout = null;
        }, 20);
    }
});

// Performance optimization: Disable cursor trail on mobile
if (window.innerWidth <= 768) {
    document.removeEventListener('mousemove', createCursorTrail);
}

// Lazy loading for images (if any images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Dark theme persistence
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

// Console message for developers
console.log(`
🚀 Portfolio Website Loaded Successfully!
📧 Contact: your.email@example.com
🌐 Built with HTML, CSS, and JavaScript
💫 Dark theme with elegant animations
`);

// Prevent right-click context menu (optional security feature)
// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', e => e.preventDefault());

// Disable F12, Ctrl+Shift+I, Ctrl+U (optional security feature)
// Uncomment if you want to disable dev tools shortcuts
/*
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});
*/
