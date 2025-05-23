// Initialize Swiper (Testimonials Slider)
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

// Mobile Menu Toggle (Add if needed)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});