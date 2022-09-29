/*
*   Antonio Medina Valenzuela
*   p5 reference:
*   https://p5js.org/reference/
*/

// p5 setup
function setup() {
    // Creating canvas
    const canvas = createCanvas(800, 500);
    // Setting canvas parent
    canvas.parent('cont')
    // Adding styles to canvas element, centered
    canvas.position(0, 0);
    canvas.style('top', '50%');
    canvas.style('position', 'absolute');
    canvas.style('margin-right', '-50%');
    canvas.style('left', '50%');
    canvas.style('transform', 'translate(-50%, -50%)');

    // Text settings
    textAlign(CENTER);
    textFont('Georgia');
    textSize(40);
}
  
// Variables for "no" button
let x = 500;
let y = 325;
let Pressed = false;

// draw p5
function draw() {
    // Draw white background
    background(255);
    // Draw boundry
    rect(0,0,width,height)

    // Draw top rectangle
    push();
        rectMode(CENTER);
        fill(230);
        rect(width / 2, 20, width, 40);
    pop();

    // Display tittle text
    push();
        noStroke();
        textSize(25)
        text('This site works better with cookies,', width / 2, 120);
        text('would you like some?', width / 2, 150);
    pop();

    // Yes button
    push();
        fill(0, 190, 0);
        rect(100, 300, 100, 50);
        textSize(20);
        fill(0);
        text('Yes!!', 150, 330);
    pop();

    // No button
    push();
        rectMode(CENTER);
        fill(190, 0, 0);
        rect(x, y, 100, 50);
        textSize(20);
        fill(0);
        text('No, thanks', x, y + 5);
    pop();

    // To intersect no button, if intersected, change its position to a random
    // place between the boundry of the screen, y is set to a random number
    // between 80 and the height
    if (mouseX > x - 50 && mouseX < x + 50 && mouseY > y - 25 && mouseY < y + 25) {
      y = random(80, height);
      x = random(width);
    }

    // if yes button pressed
    if (Pressed) {
      push();
          rectMode(CENTER);
          fill(247, 191, 190);
          rect(width / 2, height / 2, 350, 100);
          fill(0);
          textSize(16);
          text('Thank you for voluntarily accepting our cookies!', width / 2, height / 2);
      pop();
    }
}
  
// p5.js function, detects a click on the canvas
function mousePressed() {
    // if the click was inside yes button
    if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 350) {
      Pressed = true;
    }
}
