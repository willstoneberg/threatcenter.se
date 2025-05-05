// HANDLING POTENTIAL CACHING
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

// BURGER MENU
const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const burgerMenu = document.getElementById('burger-menu');
const menuItems = burgerMenu.querySelectorAll(".reveal");

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        burgerMenu.classList.add('hidden');
    }
});

closeButton.addEventListener('click', () => {
    burgerMenu.classList.add('hidden');
    document.body.style.overflow = '';
    
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });
    
    burgerMenu.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'transform') {  
            burgerMenu.style.visibility = 'hidden';
            burgerMenu.removeEventListener('transitionend', handler);
        }
    });
});

burgerButton.addEventListener('click', () => {
    burgerMenu.style.visibility = 'visible';
    burgerMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 100);
    });
});


// REVEAL SECTIONS ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealElements(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    function revealElements(section) {
        const reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            setTimeout(() => {
                reveal.classList.add("active");
            }, index * 600);
        });
    }
});