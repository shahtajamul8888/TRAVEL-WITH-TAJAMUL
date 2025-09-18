// Background slideshow image cycling every 1 second with smooth fade
const slides = document.querySelectorAll('#bg-slideshow .slide');
let currentIndex = 0;
const slideInterval = 1000; // 1 second

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, slideInterval);

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox open / close functionality for gallery images
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Form submission placeholder - you can replace this with real handling
function submitForm(e) {
  e.preventDefault();
  alert("Thank you for your request. We will contact you soon!");
  e.target.reset();
}
