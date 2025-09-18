// Animated entrance overlay (removes after 5 sec)
setTimeout(() => {
  document.getElementById("entrance-animation").style.display = "none";
}, 5000);

// Background slideshow cycling every 1 sec
const slides = document.querySelectorAll('#bg-slideshow .slide');
let currentIndex = 0;
const slideInterval = 1000; // 1 second

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, slideInterval);

// Year update
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox controls
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Contact form mock
function submitForm(e) {
  e.preventDefault();
  alert("Thank you for your request. We'll contact you soon!");
  e.target.reset();
}
