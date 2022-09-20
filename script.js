"use strict";

//!Variables

let allOptions = document.getElementsByClassName("circle");
let selected = document.getElementsByClassName("selected");

//!Variables

let check = function () {
  if (selected.length > 1) {
    console.log("uma nova seleção");
  } else {
    console.log("Não é possível selecionar mais de 1");
  }
};

for (let i = 0; i < allOptions.length; i++) {
  allOptions[i].addEventListener("click", function () {
    allOptions[i].classList.add("selected");
    console.log(selected);
    check();
  });
}
