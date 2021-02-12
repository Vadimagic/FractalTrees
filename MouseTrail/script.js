const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = 'white';
  ctx.fillRect(10, 10, 150, 50)
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 100, 500, 150)
})

ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 150, 50)
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 500, 150)