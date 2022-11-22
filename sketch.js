let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 34;
  let EllipseY = height / 23;
  let EllipseSize = vol;

  //vertical
  drawEllipse(EllipseX, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 14, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 15, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 17, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 18, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 20, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 23, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 25, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 29, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 32, EllipseY * 2, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }
  //Horizontal
  drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize);
  drawHorizontalEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawHorizontalEllipse(EllipseX * 5, EllipseY * 5, EllipseSize);
  drawHorizontalEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawHorizontalEllipse(EllipseX * 10, EllipseY * 7, EllipseSize);
  drawHorizontalEllipse(EllipseX * 12, EllipseY * 2, EllipseSize);
  drawHorizontalEllipse(EllipseX * 14, EllipseY * 6, EllipseSize);
  drawHorizontalEllipse(EllipseX * 15, EllipseY * 10, EllipseSize);
  drawHorizontalEllipse(EllipseX * 17, EllipseY, EllipseSize);
  drawHorizontalEllipse(EllipseX * 18, EllipseY * 7, EllipseSize);
  drawHorizontalEllipse(EllipseX * 20, EllipseY * 4, EllipseSize);
  drawHorizontalEllipse(EllipseX * 23, EllipseY * 2, EllipseSize);
  drawHorizontalEllipse(EllipseX * 25, EllipseY * 5, EllipseSize);
  drawHorizontalEllipse(EllipseX * 29, EllipseY * 3, EllipseSize);
  drawHorizontalEllipse(EllipseX * 32, EllipseY * 2, EllipseSize);

  function drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
