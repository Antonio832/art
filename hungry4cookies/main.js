function setup() {
    const canvas = createCanvas(800, 500);
    canvas.parent('cont')
    canvas.position(0, 0);
    canvas.style('top', '50%');
    canvas.style('position', 'absolute');
    canvas.style('margin-right', '-50%');
    canvas.style('left', '50%');
    canvas.style('transform', 'translate(-50%, -50%)');
    background(80);
  
    push();
    rectMode(CENTER);
    fill(122);
    rect(width / 2, 20, width, 40);
    pop();
    textAlign(CENTER);
    textFont('Georgia');
    textSize(40);
  }
  
  let x = 500;
  let y = 325;
  let Pressed = false;
  
  function draw() {
    background(255);
    rect(0,0,width,height)
  
    push();
        rectMode(CENTER);
        fill(230);
        rect(width / 2, 20, width, 40);
    pop();
  
  
    push();
        noStroke();
        textSize(25)
        text('This site works better with cookies,', width / 2, 120);
        text('would you like some?', width / 2, 150);
    pop();
  
    push();
        fill(0, 190, 0);
        rect(100, 300, 100, 50);
        textSize(20);
        fill(0);
        text('Yes!!', 150, 330);
    pop();
  
    push();
        rectMode(CENTER);
        fill(190, 0, 0);
        rect(x, y, 100, 50);
        textSize(20);
        fill(0);
        text('No, thanks', x, y + 5);
    pop();
  
    if (mouseX > x - 50 && mouseX < x + 50 && mouseY > y - 25 && mouseY < y + 25) {
      y = random(80, height);
      x = random(width);
    }
  
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
  
  function mousePressed() {
    if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 350) {
      Pressed = true;
    }
  }