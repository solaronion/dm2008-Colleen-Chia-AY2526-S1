function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(237, 224, 183); //bg colour
  strokeWeight(3);
  
  //head fins
  stroke("#1A3772");
  fill("#3C79C4");
  rect(160, 70, 60, 60, 27); //top1
  rect(200, 80, 50, 60, 27); //top2
  ellipse(125, 170, 45); //left
  ellipse(275, 170, 45); //right
  
  //arms
  stroke("#3758a3");
  fill(69, 197, 204);
  ellipse(125, 240, 40, 50);
  ellipse(275, 240, 40, 50);
  

  //body
  stroke("#3758a3");
  fill(69, 197, 204);
  rect(125, 100, 150, 200, 100);
  rect(125, 200, 150, 110, 20);
  //x,y,width,height,corner radius?
  // horizontal first then vertical
  noStroke();
  rect(126, 185, 147, 80, 20);
  
  
  //feet
  stroke("#3758a3")
  fill(69, 197, 204);
  rect(125, 300, 70, 30, 20); //left leg
  rect(205, 300, 70, 30, 20); //right leg
  
  let c = color(26, 55, 114);
  c.setAlpha(128);
  fill(c);
  noStroke();
  rect(126, 292, 148, 20, 10);
  
  
  // mouth
  stroke("#691e1e");
  fill(230, 135, 129);
  rect(125, 190, 150, 20, 50);
  line(140, 200, 260, 200);
  
  
  //eye whites
  stroke("#191d29");
  fill(233, 235, 242);
  ellipse(170, 160, 50);
  ellipse(230, 160, 50);
  
  //pupils
  fill(35, 36, 41);
  noStroke();
  ellipse(175, 160, 27);
  ellipse(225, 160, 27);
  
  //quad test
  fill(250, 77, 50);
  noStroke();
  //quad(213, 231, 256, 231, 215, 274, 257, 274);
}