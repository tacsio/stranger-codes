float a = 0;


ArrayList<Box> sponge;

void setup() {
	size(400, 400, P3D);
	sponge = new ArrayList<Box>();
	Box b = new Box(0,0,0,200);
	sponge.add(b);
}

void mousePressed() {
	ArrayList<Box> newSponge = new ArrayList<Box>();

	for(Box b : sponge) {
		ArrayList<Box> newBoxes = b.generate();
		newSponge.addAll(newBoxes);
	}

	sponge = newSponge;
}


void draw() {
	background(255);
	lights();
	noStroke();
	

	translate(width/2, height/2);
	rotateX(a);
	rotateY(a);
	rotateZ(a);

	for(Box b : sponge) {
		b.show();
	}
	
	a += 0.01;
}
