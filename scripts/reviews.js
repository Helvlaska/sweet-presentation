document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".review");
  const dots = document.querySelectorAll(".reviews__dots .dot");
  let index = 0;
  const delay = 6000; // 6 secondes par avis

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("dot--active"));
    slides[n].classList.add("active");
    dots[n].classList.add("dot--active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Démarrage
  showSlide(index);
  setInterval(nextSlide, delay);
});

