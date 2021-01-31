const canvas = document.querySelector('#canvas');

const generateButton = document.querySelector('#generate-tree-button');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (len < 10) {
    ctx.restore();
    return;
  }

  drawTree(0, -len, len * 0.75, angle + 5, branchWidth);
  drawTree(0, -len, len * 0.75, angle - 5, branchWidth);

  ctx.restore();
}

drawTree(canvas.width/2, canvas.height - 80, 120, 0, 1, 'rgb(96, 30, 161)', 'rgb(46, 238, 228)');