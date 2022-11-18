let menu = 0;
let showLogo = true;
let nameButton;
let game1Button;
let game2Button;
let game3Button;
let homeButton;
let greeting;
let wyn = false;
let ds = false;
let ctt = false;
let kp = false;

let red;
let blue;
let green;
let purple;
let yellow;
let colorArray = [];

let buttonArray = [];

function setup() {
  createCanvas(800, 600);
  v1 = random(50, 200);
  v2 = random(50, 200);
  v3 = random(50, 200);
  setInterval(changeBG, 1000);
  
  game1Button = createButton("Write your name")
  game2Button = createButton("Draw shapes")
  game3Button = createButton("Count to 10")
  homeButton = createButton("Home")
  
  red = color(255, 0, 0)
blue = color(0, 0, 255)
green = color(0, 255, 0)
  purple = color(255, 0, 255)
  yellow = color(255, 255, 0)
  colorArray = [red, blue, green, purple, yellow];
}

function logo() {
  noStroke();
  textSize(60);
    textAlign(LEFT);
    fill(255, 0, 0);
    text('k', 320, 110);
    fill(255, 130, 0);
    text('i', 350, 110);
    fill(255, 255, 0);
    text('n', 365, 110);
    fill(0, 255, 0);
    text('d', 398, 110);
    fill(0, 0, 255);
    text('e', 430, 110);
    fill(255, 0, 255);
    text('r', 460, 110);
  }

function changeBG(){
  if(menu === 0) {
    v1 = random(50, 200);
    v2 = random(50, 200);
    v3 = random(50, 200);
  }
}

function drawing() {
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(5);
    }
  }
}

function playgame1() {
  background(random(50, 200), random(50, 200), random(50, 200));
  nameButton.hide();
  input.hide();
  greeting.hide();
  drawing();
  textSize(170)
  const name = input.value();
  text(name, 400, 300);
  input.value('');
}

  function getName() {
  textSize(30);
  fill(0);
  textAlign(CENTER);
  greeting = createElement('h2', 'What is your name?');
  greeting.position(290, 100);
  input = createInput();
  input.position(290, 170);
  nameButton = createButton('submit');
  nameButton.position(input.x + input.width, 170);
  nameButton.mousePressed(playgame1)
  }
  

function keyTyped() {
  if (key == ' ') {
    if (menu == 2) {
    background(random(50, 200), random(50, 200), random(50, 200));
      logo();
    }
  }
}

function draw() {
  if(menu !== 1 && menu !== 2) {
    background(v1, v2, v3);
    logo();
  }
  
  
function home() {
    menu = 0
  input.hide();
  nameButton.hide();
  greeting.hide();
        }
function game1() {
    menu = 1
    getName();
        }
function game2() {
    menu = 2
        }
function game3() {
    menu = 3;
  
  buttonArray = [];
  let count = 1;
  while(buttonArray.length < 10) {
    let radius = 50;
    let randColor = colorArray[floor(random(0, colorArray.length))];
    //let randColor = colorArray[count % colorArray.length];
    let tempButton = new CountButton(random(radius, width - radius), random(160 + radius, 460 - radius), radius, count, randColor);
    
    let test = true;
    let maxCount = 1000;
    let counting = 0;
    
    while(test && counting < maxCount) {
      test = false;
      for(let i in buttonArray) {
        if(buttonArray[i].collideCircle(tempButton)) {
          test = true;
        }
      }
      
      if(test) {
        tempButton.x = random(radius, width - radius);
        tempButton.y = random(160 + radius, 460 - radius);
      }
      
      counting ++;
    }
    
    buttonArray.push(tempButton);
    
    count ++;
  }
  
}


function hideMenu() {
    game1Button.hide();
    game2Button.hide();
    game3Button.hide();
    
}
  
function showMenu() {
    game1Button.show();
    game2Button.show();
    game3Button.show();
    
}
  
function hideGame1() {
    homeButton.hide();
}
  
function showGame1() {
    homeButton.show();
}
  
function hideGame2() {
    homeButton.hide();
}
  
function showGame2() {
    homeButton.show();
}
  
function hideGame3() {
    homeButton.hide();
}
  
function showGame3() {
    homeButton.show();
}
  
  switch(menu)
    {
      case 0:
        {
          background(v1, v2, v3);
          noStroke();
          wyn = false;
          ds = false;
          ctt = false;
          kp = false;
          showMenu();
          hideGame1();
          hideGame2()
          hideGame3()
          textSize(60);
          logo();
          game1Button.position(300, 180);
          game1Button.size(200, 75)
          game1Button.style('background-color', red);
          game2Button.position(300, 290);
          game2Button.size(200, 75)
          game2Button.style('background-color', blue);
          game3Button.position(300, 400);
          game3Button.size(200, 75)
          game3Button.style('background-color', green);
          
             
        } break;
        case 1:
        {
          wyn = true;
          ds = false;
          ctt = false;
          kp = false;
          showGame1();
          hideMenu();
          textAlign(CENTER);
          fill(0);
          textSize(30);
          if(wyn){
            strokeWeight(1);
            text("Writing Your Name", 400, 50);
            strokeWeight(5);
          } 
          homeButton.position(300, 500);
          homeButton.size(200, 75)
          homeButton.style('background-color', yellow);
          drawing();
          stroke(0);
          noFill(0);
        } break;
        case 2:
        {
          wyn = false;
          ds = true;
          ctt = false;
          kp = false;
          showGame2();
          hideMenu();
          textAlign(CENTER);
          fill(0);
          textSize(30);
          
          homeButton.position(300, 500);
          homeButton.size(200, 75)
          homeButton.style('background-color', yellow);
        
        drawing();
        sqtriAcc();
        circAcc();
        noFill(0);
        stroke(0);
        strokeWeight(1);
          if(ds){
            fill(0);
            text("Draw Shapes", 400, 50);
            text("Use the mouse to draw a circle, square, and triangle.", 400, 150);
            text("Press SPACE to clear the sketch.", 400, 180);
            noFill(0);
          }
        ellipse(150, 350, 200, 200);
        rect(300, 250, 200, 200);
        triangle(550, 450, 750, 450, 650, 250)      


          
          
        } break;
        case 3:
        {
          wyn = false;
          ds = false;
          ctt = true;
          kp = false;
          showGame3();
          hideMenu();
          textAlign(CENTER);
          fill(0);
          textSize(30);
          noStroke();
          
          homeButton.position(300, 500);
          homeButton.size(200, 75)
          homeButton.style('background-color', yellow);
          
          for(let i in buttonArray) {
            buttonArray[i].draw();
          }
          
          if(ctt){
          text("Count to 10", 400, 50);
          }
          
          if (buttonArray.length === 0) {

            fill(blue);
            textSize(40);
            
            text( "Well Done! Go Home to play again", width/2, height/2)
            
          }
          
        } break;
        case 4:
        {
          wyn = false;
          ds = false;
          ctt = false;
          kp = true;
          hideMenu();
          textAlign(CENTER);
          fill(0);
          textSize(30);
          if(kp){
          text("Keyboard Practice", 400, 50);
          }
          homeButton.position(300, 500);
          homeButton.size(200, 75)
          homeButton.style('background-color', yellow);
        } break;
    }
  homeButton.mousePressed(home)
  game1Button.mousePressed(game1)
  game2Button.mousePressed(game2)
  game3Button.mousePressed(game3)

  
function circAcc() {
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      if(dist(mouseX, mouseY, 150, 350) < 125 && dist(mouseX, mouseY, 150, 350) > 75) {
        stroke(0, 255, 0);
      }
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(5);
    }
  }
}

function sqtriAcc() {
      noStroke();
      var hitSq;
      var hitTri;
  if (mouseIsPressed == true) {
      if (mouseButton == LEFT) {
      if (collidePointRect(mouseX, mouseY, 290, 240, 220, 220)) {
          hitSq = true
      }
      if (collidePointRect(mouseX, mouseY, 330, 280, 150, 150)) {
          hitSq = false
        }
  }
      if (mouseButton == LEFT) {
        if (collidePointLine(mouseX, mouseY, 550, 450, 750, 450, 10)) {
            hitTri = true
        } else if (collidePointLine(mouseX, mouseY, 550, 450, 650, 250, 10)) {
            hitTri = true
        } else if (collidePointLine(mouseX, mouseY, 650, 250, 750, 450, 10)) {
            hitTri = true
        } else hitTri = false

        strokeWeight(5);
        if (hitTri == true || hitSq == true) {
          stroke(color(0, 255, 0));
        } else stroke(color(255, 0, 0));
      }
    }
  }

}

function mouseClicked() {
  if(menu === 3) {
    if(buttonArray.length > 0) {
      if(buttonArray[0].collidePoint(mouseX, mouseY)) {
        buttonArray.splice(0, 1);
      }
    }
  }
}

class CountButton {
  constructor(x, y, radius, number, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.number = number;
    this.color = color;
  }
  
  draw() {
    
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
    
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0);
    text(this.number, this.x, this.y + 2);
    textAlign(CENTER, BASELINE);
    noStroke();
    
  }
  
  collidePoint(x, y) {
    return (dist(this.x, this.y, x, y) < this.radius);
  }
  
  collideCircle(button) {
    return (dist(this.x, this.y, button.x, button.y) < this.radius + button.radius + 10);
  }
}