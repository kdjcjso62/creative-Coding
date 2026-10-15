let particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);

  let floatY = sin(frameCount * 0.04) * 45;

  let size = 140 + sin(frameCount * 0.06) * 25;

  let x = width / 2;
  let y = height / 2 + floatY;

  // 绘制蓝紫色实心球体
  noStroke();
  fill(100, 90, 255);
  circle(x, y, size);

  // 添加简单的柔和高光
  fill(150, 140, 255, 100);
  circle(x - size * 0.15, y - size * 0.18, size * 0.55);

  if (random(1) < 0.12) {
    let angle = random(TWO_PI);

    particles.push({
      x: x + cos(angle) * size / 2,
      y: y + sin(angle) * size / 2,
      vx: cos(angle) * random(1, 3),
      vy: sin(angle) * random(1, 3),
      life: 255
    });
  }

  noStroke();

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    p.x += p.vx;
    p.y += p.vy;
    p.life -= 4;

    fill(130, 150, 255, p.life);
    circle(p.x, p.y, 3);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}