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
        this.style.display = 'none';
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

document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');

    // Check if element exists before adding event listener
    if (scrollIndicator) {
        // Hide scroll indicator when user starts scrolling
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        });
    } else {
        console.error('Scroll indicator element not found');
    }
})

document.addEventListener('DOMContentLoaded', function () {

    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const closeBtns = document.querySelectorAll('.close');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        positionModal(modal);
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    function closeAllModals() {
        modals.forEach(modal => {
            closeModal(modal);
        });
    }

    function positionModal(modal) {
        const modalContent = modal.querySelector('.modal-content');
        const windowHeight = window.innerHeight;
        const modalHeight = modalContent.offsetHeight;

        if (modalHeight > windowHeight) {
            modal.style.alignItems = 'flex-start';
            modalContent.style.marginTop = '20px';
            modalContent.style.marginBottom = '20px';
        } else {
            modal.style.alignItems = 'center';
            modalContent.style.marginTop = '0';
            modalContent.style.marginBottom = '0';
        }
    }

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event from bubbling up
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.dataset.project;
            const modal = document.getElementById(`modal-${projectId}`);
            openModal(modal);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event from bubbling up
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.modal-content') && !event.target.closest('.read-more-btn')) {
            closeAllModals();
        }
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    window.addEventListener('resize', function () {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                positionModal(modal);
            }
        });
    });
});