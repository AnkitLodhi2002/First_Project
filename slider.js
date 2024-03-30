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
  setTimeout(showSlides, 1000);
}

showSlides();



// newly_slides javaScript//
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prevNewly");
    const nextBtn = document.querySelector(".nextNewly");
    const newly_slides = document.querySelectorAll(".slide_newly");
    let currentIndex = 0;
  
    function showslide_newly(index) {
        newly_slides.forEach((slide_newly, i) => {
            slide_newly.style.display = (i === index) ? "flex" : "none";
        });
    }
  
    function nextslide_newly() {
        currentIndex = (currentIndex + 1) % newly_slides.length;
        showslide_newly(currentIndex);
    }
  
    function prevslide_newly() {
        currentIndex = (currentIndex - 1 + newly_slides.length) % newly_slides.length;
        showslide_newly(currentIndex);
    }
  
    nextBtn.addEventListener("click", nextslide_newly);
    prevBtn.addEventListener("click", prevslide_newly);
  
    showslide_newly(currentIndex);
  });
  
  // Automatic newly_slideshow
  let slide_newlyIndex = 0;
  const newly_slides = document.getElementsByClassName("slide_newly");
  
  function shownewly_slides() {
    for (let i = 0; i < newly_slides.length; i++) {
        newly_slides[i].style.display = "none";
    }
    slide_newlyIndex++;
    if (slide_newlyIndex > newly_slides.length) slide_newlyIndex = 1;
    newly_slides[slide_newlyIndex - 1].style.display = "block";
    setTimeout(shownewly_slides, 2000);
  }
  
  shownewly_slides();
  
  
  
  
  
  
  
  
  
  
  










