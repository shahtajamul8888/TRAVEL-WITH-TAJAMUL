// Fade-in Disclaimer Animation
document.addEventListener("DOMContentLoaded", () => {
  const disclaimer = document.querySelector(".disclaimer-content");
  setTimeout(() => {
    disclaimer.style.transition = "all 1s ease";
    disclaimer.style.opacity = "1";
    disclaimer.style.transform = "translateY(0)";
  }, 400);
});