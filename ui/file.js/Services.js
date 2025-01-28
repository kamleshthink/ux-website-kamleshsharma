const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

let offset = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let x = 0; x < canvas.width; x++) {
    const y =
      canvas.height / 2 +
      Math.sin((x + offset) * 0.1) * 20 +
      Math.sin((x + offset) * 0.05) * 10;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = '#00ffcc';
  ctx.lineWidth = 2;
  ctx.stroke();

  offset += 2;

  requestAnimationFrame(drawWave);
}

drawWave();
