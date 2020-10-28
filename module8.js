"use strict";

import gallery from "./gallery-items.js";

console.log(gallery);
const list = document.querySelector(".js-gallery");
const div1 = document.querySelector(".js-lightbox");
const image = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");
console.log(div1, image, button);
const generateGallery = function (array, place) {
  return array.map((elem, index) => {
    let keys = Object.keys(elem);
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", "");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", elem.preview);
    img.setAttribute("data-source", elem.original);
    img.setAttribute("alt", elem.description);
    img.setAttribute("data-index", index);
    link.appendChild(img);
    item.appendChild(link);
    place.appendChild(item);
  });
};
generateGallery(gallery, list);

// МОДАЛЬНОЕ ОКНО

list.addEventListener("click", (event) => {
  event.preventDefault();
  toOpenModal(event);
});

function toOpenModal(event) {
  div1.classList.add("is-open");
  if (event.target.nodeName === "IMG") {
    let path = event.target.dataset.source;
    image.src = path;
    console.log(path);
  }
  return;
}

function toCloseModal() {
  div1.classList.remove("is-open");
  image.src = "";
}
button.addEventListener("click", toCloseModal);
