// ========== 1. Entrance Overlay Animation ==========
setTimeout(() => {
  const entrance = document.getElementById("entrance-animation");
  entrance.style.animation = "fadeOutEntrance 1s forwards";
  setTimeout(() => entrance.style.display = "none", 1000);
}, 4500);

// ========== 2. Premium Animated Gradient Background ==========
const bgSlideshow = document.getElementById("bg-slideshow");
bgSlideshow.style.position = "fixed";
bgSlideshow.style.inset = "0";
bgSlideshow.style.zIndex = "-1";
bgSlideshow.style.background =
  `linear-gradient(270deg,
    #f0f4f8, #cfd8dc, #b0bec5, #90a4ae, #78909c,
    #556f7a, #455a64, #37474f, #263238, #1c2833,
    #f8bbd0, #f48fb1, #f06292, #ec407a, #e91e63,
    #d81b60, #c2185b, #ad1457, #880e4f, #560027,
    #bbdefb, #90caf9, #64b5f6, #42a5f5, #2196f3,
    #1e88e5, #1976d2, #1565c0, #0d47a1, #08306b,
    #a5d6a7, #81c784, #66bb6a, #4caf50, #43a047,
    #388e3c, #2e7d32, #1b5e20, #33691e, #827717,
    #fff9c4, #fff59d, #fff176, #ffee58, #ffeb3b,
    #fdd835, #fbc02d, #f9a825, #f57f17, #ff8a65,
    #ff7043, #ff5722, #f4511e, #e64a19, #d84315,
    #bf360c, #3e2723, #4e342e, #5d4037, #6d4c41,
    #7b5e57, #8d6e63, #a1887f, #bcaaa4, #d7ccc8
  )`;
bgSlideshow.style.backgroundSize = "3000% 3000%";
bgSlideshow.style.animation = "premiumGradientMove 60s ease infinite";

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes premiumGradientMove {
    0%{background-position:0% 50%}
    25%{background-position:50% 75%}
    50%{background-position:100% 50%}
    75%{background-position:50% 25%}
    100%{background-position:0% 50%}
  }
`;
document.head.appendChild(styleSheet);
