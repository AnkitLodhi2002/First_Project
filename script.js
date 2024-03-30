
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
  currentIndex = (currentIndex + direction *4 + totalSlides) % totalSlides;
  const offset = -currentIndex *25;
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
        <img src="${productData.image}" alt="${productData.title}">
        <div class="product-details"></div>`;
          // <h3>${product.title}</h3>
          // <p>${product.price}</p>
      hot_deals.appendChild(hotslideElement);
    });
  });
function hotchangeSlide(direction) {
  const hotslides = document.querySelectorAll('.hotdeals_slide');
  const hottotalSlides = hotslides.length;
  hotcurrentIndex = (hotcurrentIndex + direction *3 + hottotalSlides) % hottotalSlides;
  const offset = -hotcurrentIndex *33;
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
  justIncurrentIndex = (justIncurrentIndex + direction*4 + justIntotalSlides) % justIntotalSlides;
  const offset = -justIncurrentIndex *25;
  justIn.style.transform = `translateX(${offset}%)`;
}



// SUPER SAVERS JAVASCRIPT //
const supersavers = document.querySelector('.super');
let supersaverscurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.supersavers.forEach(product => {
      const supersliderElement = document.createElement('div');
      supersliderElement.classList.add('super_slide');
      supersliderElement.classList.add("image");
      supersliderElement.classList.add("title");
      supersliderElement.classList.add("price");
      supersliderElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>`;
      supersavers.appendChild(supersliderElement);
    });
  });



// TOP PICK OF THE WEEK //
const toppicks = document.querySelector('.toppicks');
let toppickscurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.toppicks.forEach(toppicksproduct => {
      const toppicksslideElement = document.createElement('div');
      toppicksslideElement.classList.add('toppicks_slide');
      toppicksslideElement.classList.add("image");
      // toppicksslideElement.classList.add("title");
      // toppicksslideElement.classList.add("price");
      toppicksslideElement.innerHTML = `
        <img src="${toppicksproduct.image}" alt="${toppicksproduct.title}">
        <div class="toppicksproduct-details"></div>`;
          // <h3>${toppicksproduct.title}</h3>
          // <p>${toppicksproduct.price}</p>
      toppicks.appendChild(toppicksslideElement);
    });
  });
function toppicksSlide(direction) {
  const toppicksslides = document.querySelectorAll('.toppicks_slide');
  const toppickstotaltoppicksslides = toppicksslides.length;
  toppickscurrentIndex = (toppickscurrentIndex + direction *3 + toppickstotaltoppicksslides) % toppickstotaltoppicksslides;
  const offset = -toppickscurrentIndex *33.1;
  toppicks.style.transform = `translateX(${offset}%)`;
}


// SUGAR BEAUTY BLOG //
const sugarBeauty = document.querySelector('.sugarBeauty');
let sugarBeautycurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.sugarBeauty.forEach(sugarBeautyproduct => {
      const sugarBeautyslideElement = document.createElement('div');
      sugarBeautyslideElement.classList.add('sugarBeauty_slide');
      sugarBeautyslideElement.classList.add("image");
      // sugarBeautyslideElement.classList.add("title");
      // sugarBeautyslideElement.classList.add("price");
      sugarBeautyslideElement.innerHTML = `
        <img src="${sugarBeautyproduct.image}" alt="${sugarBeautyproduct.title}">
        <div class="sugarBeautyproduct-details"></div>`;
          // <h3>${sugarBeautyproduct.title}</h3>
          // <p>${sugarBeautyproduct.price}</p>
      sugarBeauty.appendChild(sugarBeautyslideElement);
    });
  });
function sugarBeautySlide(direction) {
  const sugarBeautyslides = document.querySelectorAll('.sugarBeauty_slide');
  const sugarBeautytotalsugarBeautyslides = sugarBeautyslides.length;
  sugarBeautycurrentIndex = (sugarBeautycurrentIndex + direction * 3+ sugarBeautytotalsugarBeautyslides) % sugarBeautytotalsugarBeautyslides;
  const offset = -sugarBeautycurrentIndex *33.1;
  sugarBeauty.style.transform = `translateX(${offset}%)`;
}


// SKINCARE BASICS JAVASCRIPT //
const skincareData = document.querySelector('.skin');
let skincareDatacurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.skincareData.forEach(skinproduct => {
      const skinsliderElement = document.createElement('div');
      skinsliderElement.classList.add('skin_slide');
      skinsliderElement.classList.add("image");
      skinsliderElement.classList.add("title");
      skinsliderElement.classList.add("price");
      skinsliderElement.innerHTML = `
        <img src="${skinproduct.image}" alt="${skinproduct.title}">
        <div class="product-details">
          <h3>${skinproduct.title}</h3>
          <p>${skinproduct.price}</p>
        </div>`;
      skincareData.appendChild(skinsliderElement);
    });
  });


// MERCH STATION BASICS JAVASCRIPT //
const merchData = document.querySelector('.merch');
let merchDatacurrentIndex = 0;

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.merchData.forEach(merchproduct => {
      const merchsliderElement = document.createElement('div');
      merchsliderElement.classList.add('merch_slide');
      merchsliderElement.classList.add("image");
      merchsliderElement.classList.add("title");
      merchsliderElement.classList.add("price");
      merchsliderElement.innerHTML = `
        <img src="${merchproduct.image}" alt="${merchproduct.title}">
        <div class="product-details">
          <h3>${merchproduct.title}</h3>
          <p>${merchproduct.price}</p>
        </div>`;
      merchData.appendChild(merchsliderElement);
    });
  });
function merchchangeSlide(direction) {
  const merchDataslides = document.querySelectorAll('.merch_slide');
  const merchtotalSlides = merchDataslides.length;
  merchDatacurrentIndex = (merchDatacurrentIndex + direction * 4 + merchtotalSlides) % merchtotalSlides;
  const offset = -merchDatacurrentIndex *25;
  merchData.style.transform = `translateX(${offset}%)`;
}