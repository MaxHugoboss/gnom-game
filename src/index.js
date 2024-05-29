import './css/style.css';
import gnomeImg from './img/gnome.png';

document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameBoard.appendChild(cell);
  }

  const gnome = document.createElement('img');
  gnome.src = gnomeImg;
  gnome.classList.add('gnome');

  const cells = document.querySelectorAll('.cell');
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
