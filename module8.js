"use strict";

import gallery from "./gallery-items.js";

console.log(gallery);
const list = document.querySelector(".js-gallery");
const div1 = document.querySelector(".js-lightbox");
const image = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");

const generateGallery = function (array, place) {
  return array.map((elem) => {
    let keys = Object.keys(elem);
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", "");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", elem[keys[0]]);
    img.setAttribute("data-source", elem[keys[1]]);
    img.setAttribute("alt", elem[keys[2]]);

    link.appendChild(img);
    item.appendChild(link);
    place.appendChild(item);
  });
};
generateGallery(gallery, list);

// МОДАЛЬНОЕ ОКНО

list.addEventListener("click", (event) => {
  toOpenModal(event);
});

function toOpenModal(event) {
  if (event.target.nodeName === "IMG") {
    div1.classList.add("is-open");
    let path = event.target.getAttribute("data-source");
    image.src = path;
  }
  return;
}

function toCloseModal() {
  div1.classList.remove("is-open");
  image.src = "";
}
button.addEventListener("click", toCloseModal);
