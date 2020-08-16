class Food {
  constructor(resolution) {
    this.position = createVector(
      floor(random(width / resolution)),
      floor(random(height / resolution))
    );

  }

  show() {
    fill(52, 235, 216);
    noStroke();
    rect(this.position.x, this.position.y, 1, 1);
  }

  changeLocation() {
    this.position = createVector(
      floor(random(width / resolution)),
      floor(random(height / resolution))
    );
  }
}