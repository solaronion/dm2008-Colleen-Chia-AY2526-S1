let port; // Serial Communication port
let connectBtn;

let sensorVal;
let rectLength = 50;
let targetLength = 50; // used for Option 2

let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  port = createSerial(); // creates the Serial Port

  // Connection helpers
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);

  bg = color(126, 196, 192);
}

function draw() {
  background(bg);
  noStroke();
  
  fill(255, 189, 74)
  circle(width/2, (height*3)/4, 80)


  for (let i = 0; i < width; i +=50)
  {
    let length;
    if (i % 50 == 0)
    {
      length = rectLength*2
      fill(57, 70, 115)
    }

    rect (i + 25, 0, 25, length);
    
  }

  // Receive data from Arduino
  if (port.opened()) {
    sensorVal = port.readUntil("\n");
    // Only log data that has information, not empty signals
    if (sensorVal[0]) {
      // Once you verify data is coming in,
      // disable logging to improve performance
      console.log(sensorVal);

      // OPTION 1:
      // Update circle's size with sensor's data directly
      // Reduce delay() value in Ardiuno to get smoother changes

      // use float() to convert from data from string to number
      // circleSize = float(sensorVal);

      // OPTION 2:
      // Update circle's size using lerp() to smoothly change values
      // This method even works with longer delay() values in Arduino

      targetLength = float(sensorVal);
      // last value in lerp() controls speed of change
      rectLength = lerp(rectLength, targetLength, 0.1);
    }
  }
}

// DO NOT REMOVE THIS FUNCTION
function connectBtnClick(e) {
  // If port is not already open, open on click,
  // otherwise close the port
  if (!port.opened()) {
    port.open(9600); // opens port with Baud Rate of 9600
    e.target.innerHTML = "Disconnect Arduino";
    e.target.classList.add("connected");
  } else {
    port.close();
    e.target.innerHTML = "Connect to Arduino";
    e.target.classList.remove("connected");
  }
}
