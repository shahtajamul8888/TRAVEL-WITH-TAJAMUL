// BookMyShow-style image carousel for Kashmir
const kashmirMarqueeImages = [
  { name: "Dal Lake, Srinagar", url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
  { name: "Gulmarg Meadows", url: "https://images.unsplash.com/photo-1484291470158-47fede7c7432?auto=format&fit=crop&w=400&q=80" },
  { name: "Pahalgam Valley", url: "https://images.unsplash.com/photo-1518684079-78c43fb27c1a?auto=format&fit=crop&w=400&q=80" },
  { name: "Sonamarg", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" }
];

const imagesTwice = [...kashmirMarqueeImages, ...kashmirMarqueeImages];
const marqueeDiv = document.getElementById('image-marquee');
imagesTwice.forEach(item => {
  const fig = document.createElement('figure');
  const caption = document.createElement('figcaption');
  caption.textContent = item.name;
  const img = document.createElement('img');
  img.src = item.url;
  img.alt = item.name;
  fig.appendChild(caption);
  fig.appendChild(img);
  marqueeDiv.appendChild(fig);
});