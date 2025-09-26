// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let sizes = [30, 60, 90, 120]
let positions = [50, 100, 200, 350]

// 2. A variable to track the current index
let currentIndex = 0;
let currentSelect = 0;
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() 
{
  background(220);
const spacing = width / (palette.length + 1);
  // 3. Use the array value at currentIndex
  for (let i = 0; i < palette.length; i++) 
  {
    fill(palette[currentIndex]);                   // use the i-th color
    const x = (i + 1) * spacing;
    ellipse(positions[currentSelect], positions[currentSelect], sizes[currentSelect]);
  }
}

// 4. Change the index when a key is pressed
//
function mousePressed() 
{
  // Advance to the next item
  currentIndex++
  currentSelect++
  palette.push(color(random(255), random(255), random(255)));
  if (currentSelect > 3) 
  {
    currentSelect = 0;
  }
 
   
  // Log in the console to check
  console.log("Current index:", currentIndex, "→", palette[currentIndex]);
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/