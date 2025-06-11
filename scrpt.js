// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (if form exists)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(event) {
        const name = this.querySelector('input[type="text"]')?.value.trim();
        const email = this.querySelector('input[type="email"]')?.value.trim();
        const message = this.querySelector("textarea")?.value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Form submitted successfully!");
        }
    });
}

// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const totalSlides = slides.length;

// Hide all slides initially
function hideAllSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Show current slide
function showSlide() {
    hideAllSlides();
    slides[slideIndex].style.display = 'block';
}

// Next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide();
}

// Previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide();
}

// Initialize slideshow
if (slides.length > 0) {
    // Set up initial state
    showSlide();
    
    // Auto advance slides every 3 seconds
    setInterval(nextSlide, 3000);
}