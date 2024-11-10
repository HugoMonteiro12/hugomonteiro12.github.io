// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuButton.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Animate skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });
        tag.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });

    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = 'Top';
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.style.display = 'none';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function () {
        // noinspection JSDeprecatedSymbols
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {threshold: 0.5});

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('load-more').addEventListener('click', function () {
        document.getElementById('more-certificates').classList.toggle('hidden');
        this.style.display = 'none'; // Hide the load-more button after clicking
    });
});

function copyEmail() {
    navigator.clipboard.writeText('hugondarez@gmail.com');
    const button = document.querySelector('.copy-button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Email Copied!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    // Get header height for offset calculations
    const header = document.querySelector('header');

    function updateActiveSection() {
        const scrollPosition = window.scrollY + header.offsetHeight + 50; // Add some buffer

        sections.forEach(section => {
            if (!section.getAttribute('id')) return; // Skip sections without IDs

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the section is currently in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to corresponding link
                const correspondingLink = document.querySelector(`nav a[href="#${section.getAttribute('id')}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);

    // Initial check for active section
    updateActiveSection();
});