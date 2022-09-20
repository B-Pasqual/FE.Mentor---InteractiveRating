"use strict";

//!Variables

let allOptions = document.getElementsByClassName("circle");
let selected = document.getElementsByClassName("selected");
let submitButton = document.querySelector(".submit__button");
let secondCard = document.querySelector(".second__card");
let selectionText = document.querySelector(".selection__text");
let rateButton = document.querySelector(".rate");

//!Variables

for (let i = 0; i < allOptions.length; i++) {
  allOptions[i].addEventListener("click", function () {
    if (selected.length >= 1) {
      return;
    } else {
      allOptions[i].classList.add("selected");
      submitButton.addEventListener("click", function () {
        secondCard.classList.remove("hidden");
        selectionText.textContent = `You selected ${i + 1} out 5`;
      });
    }
  });
}

rateButton.addEventListener("click", function () {
  secondCard.classList.add("hidden");
  selected[0].classList.remove("selected");
});
