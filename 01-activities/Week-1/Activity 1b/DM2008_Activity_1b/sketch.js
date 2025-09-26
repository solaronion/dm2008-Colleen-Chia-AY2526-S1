// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;
let s;

function setup() {
  createCanvas(800, 800)
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  s = random(0.5, 2);
  
  background(100, 100, 114, 80);
  
  stroke(0);
  strokeWeight(s);
  
  //wings
  fill(233, 235, 242, 60);
  ellipse(x+w,     y+w*0.25,  w*1.75, w); 
  ellipse(x+w*0.75, y+w*0.25,  w*1.75, w);
  ellipse(x-w*0.1, y+w*0.25,  w*1.75, w);
  
  //body
  fill(35, 36, 41);
  ellipse(x+w*0.75, y+w*1.25, w, w*1.5);
  ellipse(x+w*0.5,  y+w*0.4, w*0.5, w*0.4);
  
  
  //head
  fill(35, 36, 41);
  ellipse(x, y, w)
  
  //eyes
  fill(233, 235, 242);
  ellipse(x-w*0.25, y, w*0.5);
  ellipse(x+w*0.25, y, w*0.5);

  
  //pupils
  fill(35, 36, 41);
  ellipse(x-w*0.25, y, w*0.25);
  ellipse(x+w*0.25, y, w*0.25);
  
  //appendages
  strokeWeight(s+2)
  line(x, y+w*0.25, x-w*0.75, y+w*0.75);
  line(x-w*0.25, y-w*0.4, x-w*0.75, y-w*0.75);
  line(x+w*0.25, y-w*0.4, x+w*0.75, y-w*0.75);
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}