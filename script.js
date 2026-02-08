const header = document.getElementById("site-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling DOWN: Hide header
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 0.3s ease";
  } else {
    // Scrolling UP: Show header
    header.style.transform = "translateY(0)";
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"; // Make it solid when scrolling
  }
  
  lastScrollY = currentScrollY;
});

