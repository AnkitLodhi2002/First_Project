
// BESTSELLERS JAVASCRIPT //
const slidesContainer = document.querySelector('.product_slides');
let currentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.product_data.forEach(product => {
      const slideElement = document.createElement('div');
      slideElement.classList.add('product_slide');
      slideElement.classList.add("image");
      slideElement.classList.add("title");
      slideElement.classList.add("price");
      slideElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>`;
      slidesContainer.appendChild(slideElement);
    });
  });
  

function changeSlide(direction) {
  const slides = document.querySelectorAll('.product_slide');
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = -currentIndex *100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}


// HOLI SPECIAL DELS! JAVASCRIPT //
const holislides = document.querySelector('.holi');
let holicurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.holiOffer.forEach(product => {
      const holislideElement = document.createElement('div');
      holislideElement.classList.add('holiproduct_slide');
      holislideElement.classList.add("image");
      holislideElement.classList.add("title");
      holislideElement.classList.add("price");
      holislideElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>`;
      holislides.appendChild(holislideElement);
    });
  });
// function holichangeSlide(direction) {
//   const slides = document.querySelectorAll('.holiproduct_slide');
//   const totalSlides = slides.length;
//   currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
//   const offset = -currentIndex *100;
//   slidesContainer.style.transform = `translateX(${offset}%)`;
// }



// HOT DEALS JAVASCRIPT //
const hot_deals = document.querySelector('.hot_deals');
let hotcurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.hotdeals_data.forEach(productData => {
      const hotslideElement = document.createElement('div');
      hotslideElement.classList.add('hotdeals_slide');
      hotslideElement.classList.add("image");
      // hotslideElement.classList.add("title");
      // hotslideElement.classList.add("price");
      hotslideElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details"></div>`;
          // <h3>${product.title}</h3>
          // <p>${product.price}</p>
      hot_deals.appendChild(hotslideElement);
    });
  });
function hotchangeSlide(direction) {
  const hotslides = document.querySelectorAll('.hotdeals_slide');
  const hottotalSlides = hotslides.length;
  hotcurrentIndex = (hotcurrentIndex + direction + hottotalSlides) % hottotalSlides;
  const offset = -hotcurrentIndex *100;
  hot_deals.style.transform = `translateX(${offset}%)`;
}






// JUST-IN JAVASCRIPT //
const justIn = document.querySelector('.justIn');
let justIncurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.justIn.forEach(product => {
      const justslideElement = document.createElement('div');
      justslideElement.classList.add('justIn_slide');
      justslideElement.classList.add("image");
      justslideElement.classList.add("title");
      justslideElement.classList.add("price");
      justslideElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>`;
      justIn.appendChild(justslideElement);
    });
  });
function justinchangeSlide(direction) {
  const justinslides = document.querySelectorAll('.justIn_slide');
  const justIntotalSlides = justinslides.length;
  justIncurrentIndex = (justIncurrentIndex + direction + justIntotalSlides) % justIntotalSlides;
  const offset = -justIncurrentIndex *100;
  justIn.style.transform = `translateX(${offset}%)`;
}