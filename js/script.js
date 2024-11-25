// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(changeSlide, 3000);

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
});
