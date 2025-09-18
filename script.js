// images for background slideshow (place images in images/)
const bgImages = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
];

const bg = document.getElementById('bg-slideshow');
let bgIndex = 0;
function setBg(i){
  bg.style.backgroundImage = `url(${bgImages[i]})`;
}
setBg(0);
setInterval(() => {
  bgIndex = (bgIndex + 1) % bgImages.length;
  setBg(bgIndex);
}, 4000);

// footer year
document.getElementById('year').innerText = new Date().getFullYear();

// Booking modal functions
function openBooking(){
  const m = document.getElementById('bookingModal');
  m.setAttribute('aria-hidden', 'false');
}
function closeBooking(){
  const m = document.getElementById('bookingModal');
  m.setAttribute('aria-hidden', 'true');
}

// Contact form submit (dummy)
function submitForm(e){
  e.preventDefault();
  alert('Thanks! Your request has been sent. Tajamul will contact you soon.');
  document.getElementById('contactForm').reset();
}

// Booking submit (dummy)
function submitBooking(e){
  e.preventDefault();
  alert('Booking request sent. We will contact you on the number provided.');
  closeBooking();
}

// Optional: Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
