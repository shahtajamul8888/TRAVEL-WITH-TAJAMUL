// ================= Hero Typing Animation =================
const heading = document.getElementById('typed-heading');
const headingText = "Kashmir — Heaven on Earth, curated by Tajamul";
let hIndex = 0;

function typeHeroText() {
  if(hIndex < headingText.length){
    heading.textContent += headingText.charAt(hIndex);
    hIndex++;
    setTimeout(typeHeroText, 100);
  }
}
heading.textContent = "";
typeHeroText();

// ================= Hero Slideshow + Captions =================
const heroImages = [];
const captions = [
  "Explore the serene beauty of Kashmir",
  "Experience adventure in Gulmarg",
  "Relax in cozy houseboats at Dal Lake",
  "Trek the lush valleys of Pahalgam",
  "Sunset views in Sonmarg",
  "Snowy peaks of Gulmarg",
  "Riverside strolls in Pahalgam",
  "Wazwan & local culture tours"
];

// Generate 100+ images dynamically
for(let i=1; i<=100; i++){
  heroImages.push(`images/kashmir${(i%10)+1}.jpg`); // images kashmir1.jpg to kashmir10.jpg repeated
}

const heroSlideshow = document.querySelector('.hero-slideshow');
const heroCaption = document.getElementById('heroCaption');

heroImages.slice(0,10).forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  heroSlideshow.appendChild(img);
});

const slides = document.querySelectorAll('.hero-slideshow img');
let slideIndex = 0;

function showSlide() {
  slides.forEach(img => img.classList.remove('active'));
  slides[slideIndex].classList.add('active');

  // Caption fade
  heroCaption.classList.remove('active');
  setTimeout(()=>{
    heroCaption.textContent = captions[slideIndex % captions.length];
    heroCaption.classList.add('active');
  },500);

  slideIndex = (slideIndex + 1) % slides.length;
}
showSlide();
setInterval(showSlide,4000);

// ================= Smooth Scroll =================
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// ================= Services Fade-in on Scroll =================
const cardsContainer = document.querySelector('.cards');
window.addEventListener('scroll', ()=>{
  if(cardsContainer){
    const rect = cardsContainer.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      cardsContainer.classList.add('show');
    }
  }
});

// ================= Gallery Fade-in on Scroll =================
const galleryGrid = document.getElementById('galleryGrid');
const galleryImages = [];
// Add 100+ Kashmir images
for(let i=1; i<=100; i++){
  const img = document.createElement('img');
  img.src = `images/kashmir${(i%10)+1}.jpg`; // kashmir1.jpg to kashmir10.jpg repeated
  galleryGrid.appendChild(img);
  galleryImages.push(img);
}

window.addEventListener('scroll', ()=>{
  galleryImages.forEach(img=>{
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      img.classList.add('show');
    }
  });
});

// ================= Particles JS =================
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 2, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 0.3, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
  },
  "retina_detect": true
});

// ================= Contact Form =================
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for your request. We'll contact you soon!");
    e.target.reset();
  });
}

// ================= Trip Planner Form =================
const tripForm = document.getElementById('tripForm');
if(tripForm){
  tripForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Trip search submitted! We'll help you plan your Kashmir trip.");
    e.target.reset();
  });
}

// ================= Update Year =================
document.getElementById("year").textContent = new Date().getFullYear();