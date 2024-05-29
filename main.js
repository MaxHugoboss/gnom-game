/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/gnome.png
const gnome_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/index.js


document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
  }
  const gnome = document.createElement("img");
  gnome.src = gnome_namespaceObject;
  gnome.classList.add("gnome");
  const cells = document.querySelectorAll(".cell");
  let currentIndex = Math.floor(Math.random() * cells.length);
  cells[currentIndex].appendChild(gnome);
  setInterval(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cells.length);
    } while (newIndex === currentIndex);
    cells[newIndex].appendChild(gnome);
    currentIndex = newIndex;
  }, 1000);
});
/******/ })()
;