"use strict";

const submitBtn = document.querySelector(".contact__form--button");
const toTopBtn = document.querySelector(".back-to-top");
const lightbox = document.createElement("div");
const portfolioImages = document.querySelectorAll(".works__image");

lightbox.id = "lightbox";
document.body.appendChild(lightbox);
lightbox.addEventListener("click", closeLightbox)

//window.addEventListener("scroll", scrollToTop);
//portfolioImages.addEventListener("click", showLightbox)

portfolioImages.forEach((image) => {
  image.addEventListener("click", (elem) => {
    lightbox.classList.add("active");
	 const img = document.createElement("img")
	 img.src = image.src
	 while (lightbox.firstChild) {
		lightbox.removeChild(lightbox.firstChild)
	 }
	 lightbox.appendChild(img)
  });
});

function closeLightbox (e) {
	if(e.target !==e.currentTarget) return
	lightbox.classList.remove("active")
}

function scrollToTop() {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
}

$(document).ready(function () {
  $(".slider__slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
