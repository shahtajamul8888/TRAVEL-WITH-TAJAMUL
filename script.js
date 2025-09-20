window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("opening").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");
  }, 3000); // 3 sec delay
});