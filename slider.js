document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = (i === index) ? "flex" : "none";
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  showSlide(currentIndex);
});

// Automatic slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

showSlides();
