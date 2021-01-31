const canvas = document.querySelector('#canvas');

const generateButton = document.querySelector('#generate-tree-button');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let curve;

function drawTree(startX, startY, len, angle, branchWidth, colorTree, colorLeaf) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = colorTree;
  ctx.fillStyle = colorLeaf;
  ctx.shadowBlur = 5;
  ctx.shadowColor = colorLeaf;
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  // ctx.lineTo(0, -len);
  if (angle > 0) {
    ctx.bezierCurveTo(10, -len/2, 30, -len/2, 0, -len);
  } else {
    ctx.bezierCurveTo(10, -len/2, -30, -len/2, 0, -len);
  }
  ctx.stroke();

  if (len < 10) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI/2);
    ctx.fill();
    ctx.restore();
    return;
  }

  curve = Math.random() * 10 + 10;

  drawTree(0, -len, len * 0.8, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * 0.8, angle - curve, branchWidth * 0.6);

  ctx.restore();
}

// drawTree(canvas.width/2, canvas.height - 80, 120, 0, 10, 'rgb(96, 30, 161)', 'rgb(46, 238, 228)');

function generateRandomTree() {
  ctx.clearRect(0,0,canvas.width, canvas.height);

  const centerPointX = canvas.width /2;
  const len = Math.floor((Math.random() * 60) + 60);
  const angle = 0;
  const branchWidth = (Math.random() * 99) + 1;
  const colorTree = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  const colorLeaf = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  console.log(colorTree)
  drawTree(centerPointX, canvas.height - 80, len, angle, branchWidth, colorTree, colorLeaf)
}

generateButton.addEventListener('click', generateRandomTree);