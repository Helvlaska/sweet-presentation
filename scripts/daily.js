document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel__item");
  const dots = document.querySelectorAll(".carousel__dots .dot");
  let index = 0;
  const delay = 3000; // 3 secondes par image

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("dot--active"));

    slides[n].classList.add("active");
    dots[n].classList.add("dot--active");
  }

  // Carrousel automatique
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Lancement
  showSlide(index);
  setInterval(nextSlide, delay);
});
