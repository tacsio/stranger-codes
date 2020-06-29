
Drop[] drops = new Drop[700];

void setup(){
  size(640,360);  

	for(int i =0; i < drops.length; i++) {
		drops[i] = new Drop();
	}
}

void draw(){
  frameRate(40);
  background(230,230,250);
  
  //sincity
  //background(48, 44, 44);
  
  //nyancat
  //background(14, 67, 114);

for(int i =0; i < drops.length; i++) {
		drops[i].fall();
		drops[i].show();
	}	
}
