// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Step 3: make one cookie object
  cookie = new Cookie("chocolate", 80, width/2, height/2);
}

function draw() {
  background(218, 204, 255);

  // Step 4: call the cookie’s show() method
  cookie.show();
}

// Step 1: define the Cookie class
class Cookie 
{
  constructor(flavor, sz, x, y) 
  {
    // set up required properties
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    if (this.flavor == "chocolate") 
    {
      fill(196, 146, 96);
    } 
    else if(this.flavor == "matcha")
    {
      fill(104, 163, 120);
    }
    else if(this.flavor == "strawberry")
    {
    fill(230, 156, 173);
    }
    else 
    {
      fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);
    
    const s = this.sz * 0.1;
    fill(60);
    ellipse(this.x - this.sz*0.22, this.y - this.sz*0.15, s);
    ellipse(this.x + this.sz*0.18, this.y - this.sz*0.10, s);
    ellipse(this.x - this.sz*0.05, this.y + this.sz*0.12, s);
    ellipse(this.x + this.sz*0.20, this.y + this.sz*0.18, s);
  }
  
  // Steps 5 & 6: Implement additional methods here
  
  
}

function keyPressed() {
  const move = 10; 
  if (keyCode === LEFT_ARROW) 
  {
    cookie.x -= move;
  } 
  else if (keyCode === RIGHT_ARROW) 
  {
    cookie.x += move;
  }
  else if (keyCode === UP_ARROW) 
  {
    cookie.y -= move;
  } 
  else if (keyCode === DOWN_ARROW) 
  {
    cookie.y += move;
  }
  
}

 function mousePressed() 
  {
  const flavours = ["chocolate", "matcha", "strawberry"];
  cookie.flavor = random(flavours);
  }

