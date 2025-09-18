// ================= 1. Entrance Overlay =================
setTimeout(() => {
  document.getElementById("entrance-animation").style.display = "none";
}, 5000);

// ================= 2. Hero Slideshow =================
const heroImages = [
  "images/kashmir1_4k.jpg",
  "images/kashmir2_4k.jpg",
  "images/kashmir3_4k.jpg",
  "images/kashmir4_4k.jpg",
  "images/kashmir5_4k.jpg"
];

const bgSlideshow = document.getElementById("bg-slideshow");
heroImages.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  if(i===0) img.classList.add("active");
  bgSlideshow.appendChild(img);
});

let currentHeroIndex = 0;
setInterval(() => {
  const slides = document.querySelectorAll("#bg-slideshow img");
  slides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = (currentHeroIndex+1) % slides.length;
  slides[currentHeroIndex].classList.add("active");
}, 3000);

// ================= 3. Typed Hero Text =================
const typedHeading = document.getElementById("typed-heading");
const heroCaption = document.getElementById("heroCaption");
const headings = ["Kashmir — Heaven on Earth, curated by Tajamul"];
const captions = ["Discover shimmering lakes, snow-kissed mountains, and warm valley hospitality. Tailor-made journeys for every traveler."];

let tIndex = 0, cIndex = 0;
let charIndex = 0;
function typeText() {
  if(charIndex <= headings[tIndex].length){
    typedHeading.textContent = headings[tIndex].slice(0,charIndex);
    charIndex++;
    setTimeout(typeText,60);
  } else {
    heroCaption.textContent = captions[cIndex];
  }
}
typeText();

// ================= 4. Gallery Images =================
const galleryImages = [
  "images/kashmir1_4k.jpg",
  "images/kashmir2_4k.jpg",
  "images/kashmir3_4k.jpg",
  "images/kashmir4_4k.jpg",
  "images/kashmir5_4k.jpg",
  "images/kashmir6_4k.jpg",
  "images/kashmir7_4k.jpg",
  "images/kashmir8_4k.jpg",
  "images/kashmir9_4k.jpg",
  "images/kashmir10_4k.jpg",
  "images/kashmir1_4k.jpg",
  "images/kashmir2_4k.jpg",
  "images/kashmir3_4k.jpg",
  "images/kashmir4_4k.jpg",
  "images/kashmir5_4k.jpg",
  "images/kashmir6_4k.jpg"
];

const galleryGrid = document.getElementById("galleryGrid");
galleryImages.forEach(src=>{
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Kashmir Image";
  img.onclick = ()=> openLightbox(src);
  galleryGrid.appendChild(img);
});

// ================= 5. Lightbox =================
function openLightbox(src){
  let lightbox = document.getElementById("lightbox");
  if(!lightbox){
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = '<img id="lightbox-img" src="" alt="Lightbox Image">';
    lightbox.onclick = ()=> lightbox.style.display="none";
    document.body.appendChild(lightbox);
  }
  document.getElementById("lightbox-img").src = src;
  lightbox.style.display = "flex";
}

// ================= 6. Popular Destinations =================
const destinations = [
  { name:"Gulmarg", img:"images/kashmir1_4k.jpg" },
  { name:"Sonamarg", img:"images/kashmir2_4k.jpg" },
  { name:"Pahalgam", img:"images/kashmir3_4k.jpg" },
  { name:"Dal Lake", img:"images/kashmir4_4k.jpg" },
  { name:"Nishat Park", img:"images/kashmir5_4k.jpg" },
  { name:"Shalimar Park", img:"images/kashmir6_4k.jpg" },
  { name:"Mansbal Lake", img:"images/kashmir7_4k.jpg" },
  { name:"Wullar Lake", img:"images/kashmir8_4k.jpg" },
  { name:"Doodhpathri", img:"images/kashmir9_4k.jpg" },
  { name:"Aharbal", img:"images/kashmir10_4k.jpg" },
  { name:"Verinag", img:"images/kashmir1_4k.jpg" },
  { name:"Kokernag", img:"images/kashmir2_4k.jpg" },
  { name:"Hazratbal", img:"images/kashmir3_4k.jpg" },
  { name:"Lolab Valley", img:"images/kashmir4_4k.jpg" },
  { name:"Doodhpathri", img:"images/kashmir5_4k.jpg" },
  { name:"Aharbal", img:"images/kashmir6_4k.jpg" }
];

const sliderContainer = document.getElementById('destinationsSlider');
destinations.forEach(dest=>{
  const div = document.createElement('div');
  div.className='destination-item';
  div.innerHTML=`<img src="${dest.img}" alt="${dest.name}"><span>${dest.name}</span>`;
  sliderContainer.appendChild(div);
});

const destinationItems = document.querySelectorAll('.destination-item');
let destIndex = 0;
function showDestination(){
  destinationItems.forEach(item=>item.classList.remove('active'));
  destinationItems[destIndex].classList.add('active');
  const offset = destinationItems[destIndex].offsetLeft - sliderContainer.offsetLeft;
  sliderContainer.scrollTo({left:offset, behavior:'smooth'});
  destIndex = (destIndex+1) % destinationItems.length;
}
showDestination();
setInterval(showDestination,3000);

// ================= 7. Contact Form =================
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for your request. We'll contact you soon!");
  e.target.reset();
});

// ================= 8. Update Year =================
document.getElementById("year").textContent = new Date().getFullYear();