const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = header.offsetHeight;

  const progress = Math.min(scrollY / height, 1);

  header.style.transform = `translateY(-${progress * 100}%)`;
  header.style.opacity = 1 - progress;
});

