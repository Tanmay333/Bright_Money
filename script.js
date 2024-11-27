const carouselInner = document.querySelector(".carousel-inner");
const slides = document.querySelectorAll(".rating-container");
const button = document.getElementById('get-started')

button.addEventListener('click' , () => {
  console.log("Hello it was clicked")
  dataLayer.push({
    event: 'Get Started',
    button_id: 'Get Started',
    label: 'Apply now button was clicked'
  })
})

let currentIndex = 0; // Tracks the current slide
let slideWidth = 200 + 10; // Default slide width (200px) + gap (10px)
let visibleSlides = 3; // Default number of visible slides at once
const totalSlides = slides.length;

// Update visibleSlides and slideWidth based on screen width
function updateVisibleSlides() {
  if (window.innerWidth < 600) {
    visibleSlides = 2; // Show 2 slides at once on small screens
    slideWidth = 200 + 20; // Adjust width for smaller screens
  } else if (window.innerWidth < 1500) {
    visibleSlides = 3; // Show 3 slides at once
    slideWidth = 200 + 10; // Adjust width for 3 slides on medium screens
  }
  else if (window.innerWidth < 1500) {
    visibleSlides = 3; // Show 3 slides at once
    slideWidth = 200 + 10; // Adjust width for 3 slides on medium screens
  } else if (window.innerWidth < 500) {
    visibleSlides = 1;
    slideWidth = 200 + 20;
  }
}

// Update carousel position based on current index
function updateCarousel() {
  const offset = -currentIndex * slideWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}

// Next button logic (Loop back to first after the last slide)
function showNextSlide() {
  if (window.innerWidth < 600 && currentIndex < totalSlides - visibleSlides + 1) {
    currentIndex++;
  }else if (window.innerWidth < 1000 && currentIndex < totalSlides - visibleSlides+1) {
    currentIndex++;
  } else if (window.innerWidth < 1500 && currentIndex < totalSlides - visibleSlides){
    currentIndex++;
  }else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateCarousel();
}

// Previous button logic (Loop back to last slide after the first)
function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - visibleSlides; // Loop back to the last slide
  }
  updateCarousel();
}

// Event listeners for buttons
document.querySelector(".next-btn").addEventListener("click", showNextSlide);
document.querySelector(".prev-btn").addEventListener("click", showPrevSlide);

// Adjust visible slides based on window size
window.addEventListener("resize", () => {
  updateVisibleSlides();
  updateCarousel();
});

// Initial setup
updateVisibleSlides();
updateCarousel();
