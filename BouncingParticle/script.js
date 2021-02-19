const canvas = document.getElementById('#canvas1');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const particleArray = [];

const mouse = {
  x: null,
  y: null
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});