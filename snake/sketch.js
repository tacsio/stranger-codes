let snake;
let food;
let speed = 10;
const resolution = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(speed);

  snake = new Snake();
  food = new Food(resolution);
}

function draw() {
  background(50);
  noStroke();
  scale(resolution);

  snake.update();
  snake.show();

  if (snake.eat(food.position)) {
    food.changeLocation();
    speed *= 1.01;
    frameRate(speed);
  }
  
  if(snake.hitWall()) {
    restart();
  }
  
  if(snake.hitSelf()){ 
    restart(); 
  }

  food.show();
}

function restart() {
  snake.die();
  speed = 10;
  frameRate(speed);
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.dir(0, -1);
      break;
    case DOWN_ARROW:
      snake.dir(0, 1);
      break;
    case RIGHT_ARROW:
      snake.dir(1, 0);
      break;
    case LEFT_ARROW:
      snake.dir(-1, 0);
      break;
  }
}