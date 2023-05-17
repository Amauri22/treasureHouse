"use strict";
const accountBtn = document.getElementById("account--nav");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const producten = document.getElementById("producten");

const featuredProducts = document.getElementById("featured-products");

accountBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("i got clicked");
  
  
  modal.id = "";
});

closeBtn.addEventListener("click", function () {
  modal.id = "loginModal";
});

producten.addEventListener("click", function (e) {
  e.preventDefault();
  featuredProducts.scrollIntoView({behavior:"smooth"})
});
