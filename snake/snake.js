class Snake {
  constructor() {
    this.body = [];
    this.body.push(this.centerVector());

    this.speed = 1;
    this.xspeed = 1;
    this.yspeed = 0;
    
    this.color = color(255);
  }

  update() {
    //moviment
    for (let i = this.body.length - 1; i >= 0; i--) {
      if (i == 0) {
        this.body[i].x += this.xspeed;
        this.body[i].y += this.yspeed;

      } else {
        const nextx = this.body[i - 1].x;
        const nexty = this.body[i - 1].y;

        this.body[i].x = nextx;
        this.body[i].y = nexty;
      }
    }
  }

  hitWall() {
    return (this.body[0].x >= width / resolution ||
      this.body[0].y >= height / resolution ||
      this.body[0].x < 0 ||
      this.body[0].y < 0);
  }
  
  hitSelf() {
    const headx = this.body[0].x;
    const heady = this.body[0].y;
    let hit = false;
    
    for(let i = 2; i < this.body.length; i++) {
      if(this.body[i].x == headx && this.body[i].y == heady) {
        hit = true;
        break;
      }
    }
      
    return hit;
  }

  die() {
    this.body = [];
    this.body.push(this.centerVector());
    this.color = color(255);
    this.xspeed = 0;
    this.yspeed = 0;
  }

  show() {
    fill(this.color);
    stroke(50);
    strokeWeight(1 / resolution);
    this.body.forEach(it => rect(it.x, it.y, 1, 1));
  }

  eat(food) {
    var distance = dist(this.body[0].x, this.body[0].y, food.x, food.y);

    if (distance < 1) {
      const index = this.body.length - 1;
      this.body.push(createVector(this.body[index].x, this.body[index].y));
      this.freakOut();
      
      return true;
    }

    return false;
  }

  dir(x, y) {
    if(x != -this.xspeed) {
      this.xspeed = x;  
    }
    
    if(y != -this.yspeed) {
      this.yspeed = y;  
    }    
  }

  freakOut() {
    const actualSpeed = frameRate();
    const nextColor = map(actualSpeed, 10, 30, 255, 0)
    this.color.setBlue(nextColor);
    this.color.setGreen(nextColor);
  }

  centerVector() {
    const w = width / resolution;
    const h = width / resolution;

    return createVector(w / 2, h / 2);
  }
}