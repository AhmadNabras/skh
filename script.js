// JavaScript for hamburger menu toggle
window.onload = function() {
    // Select elements
    const hamburger = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle navigation menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}