const theme = document.getElementById('theme');
const body = document.body;
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
 

document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logoContainer');
    const logoImage = document.getElementById('logoImage');

    // Reload page when logo container is clicked
    logoContainer.addEventListener('click', function() {
        location.reload();
    });

    // Reload page when logo image is clicked
    logoImage.addEventListener('click', function() {
        location.reload();
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    // Add 'scrolled' class to navbar when scrolling down, remove it when at the top
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// project section
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === 0) ? slider.childElementCount - 1 : slideIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === slider.childElementCount - 1) ? 0 : slideIndex + 1;
    updateSlider();
});

function updateSlider() {
    const slideWidth = slider.querySelector('.slide').offsetWidth;
    slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
