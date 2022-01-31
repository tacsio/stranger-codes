class Sharingan {
  constructor() {
    this.speed = -0.02;

    this.tomoes = [];
    this.visible_tomoe = 0;
  }

  show_tomoe(x, y, rotation) {
    push();

    let w = 0;

    rotate(rotation);

    let a = 80;
    let r = 6;

    for (let i = a; i >= 0; i--) {
      w += 0.42;
      strokeWeight(w);

      let x = ((i + r) / 2) * cos(i);
      let y = ((i + r) / 2) * sin(i);
      point(x, y);
    }

    pop();
  }

  add_tomoe() {
    if (this.visible_tomoe == 3) return;

    switch (this.visible_tomoe) {
      case 2:
        this.tomoes[2] = this.tomoes[1] + 120;
        break;
      case 1:
        this.tomoes[1] = this.tomoes[0] + 120;
        break;
      default:
        this.tomoes[0] = 270;
    }

    this.visible_tomoe++;
  }

  update() {
    this.speed = map(mouseY, height, 0, -1, -10);

    for (var i = 0; i < this.visible_tomoe; i++) {
      this.tomoes[i] += this.speed;
    }
  }

  show() {
    //eye
    fill(225, 0, 0);
    ellipse(0, 0, 250);

    //inside line
    strokeWeight(7);
    stroke(127, 4, 0, 100);
    ellipse(0, 0, 150);

    //center
    fill(0);
    ellipse(0, 0, 35);

    //tomoes
    fill(0);
    stroke(0);

    //tomoes

    for (var i = 0; i < this.visible_tomoe; i++) {
      push();
      rotate(this.tomoes[i]);
      translate(150 / 2, 0);
      this.show_tomoe(150 / 2, 0, 10);
      ellipse(0, 0, 25);
      pop();
    }
  }
}
