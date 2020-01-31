class Star {
 float x;
 float y;
 float z;
 
 float pz;
 
 Star() {
  x = random(-width, width);
  y = random(-height, height);
  z = random(width);
  pz = z;
 }
 
 void update(){
   z = z -speed;
   if(z<1){
    z = width*1.5; 
    x = random(-width, width);
    y = random(-height, height);
    pz = z;
   }
 }
 
 void show(){
   fill(255);
   noStroke();
   
   float sx = map(x/z, 0, 1, 0, width);
   float sy = map(y/z, 0, 1, 0, height);

   float r = map(z, 0, width, 2, 0);   
   ellipse(sx, sy, r, r);
   
   float px = map(x/pz, 0, 1, 0, width);
   float py = map(y/pz, 0, 1, 0, height);
   
   pz = z;
   
   int x = (int) random(0,10);
  
   if(x % 2 != 0) {
     stroke(45,159,205);
   } else {
     stroke(255);
   }
   
   strokeWeight(1);
   line(px, py, sx, sy);
   
   px = x;
   py = y;
     
 } 
}
