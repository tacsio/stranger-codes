class Drop {

	float x = random(width);
	float y = random(-500, -50);
  float z = random(0,20);
	float size = map(z, 0, 20, 10, 30);
	float speed = map(z, 0, 20, 1, 10);
  
  //nyancat
  color[] nyan = {
    color(248, 15, 7),
    color(251, 171, 12),
    color(254, 255, 0),
    color(74, 255, 6),
    color(43, 171, 255),
    color(122, 68, 250)
  };
  
  color rainColor = nyan[int(random(0, nyan.length-1))];

	void fall() {
		y = y + speed;
    
    float grav = map(z, 0, 20, 0.01, 0.2);
		speed += grav;
		if(y > height) {
			y = random(-200, -100);
			speed = map(z, 0, 20, 1, 10);
		}

	}

	void show() {
    float thick = map(z, 0, 20, 0.02, 1);
    strokeWeight(thick);
		stroke(138, 43, 226);

    //sincity
    //stroke(255, 255, 255);
    
    //nyancay
    //stroke(rainColor);
    
		line(x, y, x, y + size);  
	}
}
