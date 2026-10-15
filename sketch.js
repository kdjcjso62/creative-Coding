let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(5, 5, 12);
}

function draw() {
  background(5, 5, 12, 35);

  let pulse = sin(frameCount * 0.03) * 5;
  let ringSize = 180 + pulse;

  noFill();
  stroke(80, 180, 255, 40);
  strokeWeight(8);
  ellipse(width / 2, height / 2, ringSize + 5);

  stroke(130, 210, 255);
  strokeWeight(2);
  ellipse(width / 2, height / 2, ringSize);


  if (random(1) < 0.12) {
    let angle = random(TWO_PI);
    let distance = ringSize / 2;

    let x = width / 2 + cos(angle) * distance;
    let y = height / 2 + sin(angle) * distance;

    let speed = random(1, 3);

    particles.push({
      x: x,
      y: y,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed,
      size: random(2, 4),
      life: 255
    });
  }


  noStroke();

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    p.x += p.vx;
    p.y += p.vy;
    p.life -= 3;

    fill(100, 190, 255, p.life);
    circle(p.x, p.y, p.size);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
