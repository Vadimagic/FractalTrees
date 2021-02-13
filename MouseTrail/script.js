const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: null,
  y: null,
}

canvas.addEventListener('click', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
})

function drawCircle() {
  ctx.fillStyle = '#813';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// ctx.strokeStyle = 'red';
// ctx.lineWidth = 4;
// ctx.stroke();