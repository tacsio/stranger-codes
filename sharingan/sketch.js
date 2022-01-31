let sharingan;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  sharingan = new Sharingan();
}

function draw() {
  background(50);
  noStroke();

  translate(width / 2, height / 2);

  sharingan.show();
  sharingan.update();
}

function mouseClicked() {
  sharingan.add_tomoe();
}
