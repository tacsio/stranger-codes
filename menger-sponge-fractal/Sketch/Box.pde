class Box {
	PVector position;
	float size;

	Box(float x, float y, float z, float r) {
		position = new PVector(x, y, z);
		this.size = r;
	}

	ArrayList<Box> generate() {
		ArrayList<Box> boxes = new ArrayList<Box>();	

		for(int x = -1; x < 2; x++) {
			for(int y = -1; y < 2; y++) {
				for(int z = -1; z < 2; z++) {

					float r = this.size/3;
					float px = this.position.x + x*r;
					float py = this.position.y + y*r;
					float pz = this.position.z + z*r;
					
					int center = abs(x) + abs(y) + abs(z);
					
					if(center > 1) {
						Box b = new Box(px, py, pz, r);
						boxes.add(b);
					}
				}
			}
		}

		return boxes;
	}

	/*
	Stores positions and after changes rollback to original positions
	pushMatrix();
	...
	popMatrix();
	*/
	void show() {
		pushMatrix();
		translate(position.x, position.y, position.z);
		fill(51, 255, 214);
		box(size);
		popMatrix();
	}
}
