
// Initialize variables
let slideIndex = 0;
let slideIndex2 = 0;
showSlides(slideIndex);
showSlides2(slideIndex2);

// Function to show the current slide
function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-images img');

    // Ensure index is within bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Show the current slide
    slides[slideIndex].style.display = 'block';
}

function showSlides2(index2) {
    const slides2 = document.querySelectorAll('.carousel-images2 img');

    // Ensure index is within bounds
    if (index2 >= slides2.length) {
        slideIndex2 = 0;
    } else if (index2 < 0) {
        slideIndex2 = slides2.length - 1;
    }

    // Hide all slides
    slides2.forEach(slide2 => slide2.style.display = 'none');

    // Show the current slide
    slides2[slideIndex2].style.display = 'block';
}

// Function to go to the next slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}
function nextSlide2() {
    slideIndex2++;
    showSlides2(slideIndex2);
}
// Function to go to the previous slide
function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}
function prevSlide2() {
    slideIndex2--;
    showSlides2(slideIndex2);
}

// Optionally, auto-play the carousel
setInterval(() => {
    nextSlide();
}, 3000); // Change slide every 3 seconds

setInterval(() => {
    nextSlide2();
}, 3000); // Change slide every 3 seconds
