// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to timeline items
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Add animation to skills
document.querySelectorAll('.skill-category').forEach(skill => {
    observer.observe(skill);
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const hotzone = document.getElementById('hotzone');
    let timeout;

    function showSidebar() {
        header.style.right = '0';
    }

    function hideSidebar() {
        header.style.right = '-120px';
    }

    function delayedHide() {
        timeout = setTimeout(hideSidebar, 400);
    }

    function cancelHide() {
        clearTimeout(timeout);
    }

    // Hotzone 觸發
    hotzone.addEventListener('mouseenter', function() {
        cancelHide();
        showSidebar();
    });
    hotzone.addEventListener('mouseleave', function() {
        delayedHide();
    });

    // Header 觸發
    header.addEventListener('mouseenter', function() {
        cancelHide();
        showSidebar();
    });
    header.addEventListener('mouseleave', function() {
        delayedHide();
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Star cursor effect
function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star-cursor';
    star.style.left = x - 9 + 'px'; // 置中
    star.style.top = y - 9 + 'px';
    star.innerHTML = '★';
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 800);
}
document.addEventListener('mousemove', function(e) {
    createStar(e.clientX, e.clientY);
});
