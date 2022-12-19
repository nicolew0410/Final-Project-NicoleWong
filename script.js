let atlantis;
let fishALL = [];
let scene;
let fadeValue = 0;

function preload(){
  atlantis = loadImage("atlantis.png");
  welcome = loadImage("welcome.gif");
	sciFish = loadImage("fish.png");
	spineFish = loadImage("spine.png");
	spinFish = loadImage("spinfish.png");
	myFont = loadFont("roll.otf");
	casFront = loadImage("atlantisfront.png");
	castle = loadImage("castle.png");
	optOne = loadImage("optone.jpg");
	optTwo = loadImage("opttwo.jpg");
	ship = loadImage("ship.png");
	eye = loadImage("eye.png");
	ghost = loadImage("ghost.png");
	kelp = loadImage("kelp.png");
}

function fadeBlue() {
    let startColor = color(162, 214, 235);
    let endColor = color(24, 23, 74);
    fadeValue += 0.002;
    let colorTransition = (lerpColor(startColor,endColor,fadeValue));
    if (fadeValue >= 1){
        fadeValue = 0.0;
    }
    background(colorTransition);
}   
function fadeGreen() {
    let startColor = color(65, 148, 130);
    let endColor = color(1, 54, 42);
    fadeValue += 0.002;
    let colorTransition = (lerpColor(startColor,endColor,fadeValue));
    if (fadeValue >= 1){
        fadeValue = 0.0;
    }
    background(colorTransition);
}   

function submarine(){
  fill(227, 64, 102)
  stroke(0, 21, 255)
  strokeWeight(3);
  rect(windowWidth/2-15, windowHeight/2-190, 30, 140)
  rect(windowWidth/2-50, windowHeight/2-90, 100, 50)
  ellipse(windowWidth/2-25, windowHeight/2-150, 50, 15)
  ellipse(windowWidth/2+30, windowHeight/2-190, 90, 40)
  strokeWeight(1.5)
  fill(242, 116, 146)
  ellipse(windowWidth/2+30, windowHeight/2-190, 70, 20)
  fill(247, 207, 45)
  stroke(196, 163, 26)
  strokeWeight(4)
  ellipse(windowWidth/2, windowHeight/2, 350, 100)
  push()
  translate(windowWidth/2-350, windowHeight/2-330)
  beginShape()
    fill(227, 64, 102);
    stroke(0, 21, 255)
    strokeWeight(10);
    vertex(190, 301)
    vertex(157, 242)
    vertex(115, 233)
    vertex(135, 277)
    vertex(59, 246)
    vertex(31, 289)
    vertex(93, 281)
    vertex(138, 312)
    vertex(19, 310)
    vertex(91, 343)
    vertex(82, 371)
    vertex(118, 378)
    vertex(144, 419)
    vertex(155, 383)
    vertex(189, 391)
    vertex(208, 352)
  endShape()
  pop()
  stroke(196, 163, 26)
  strokeWeight(7)
  fill(247, 207, 45)
  ellipse(windowWidth/2-150, windowHeight/2, 60, 60)
  stroke(119, 126, 199)
  strokeWeight(4)
  fill(random(150, 255), random(150, 255), random(150, 255));
  ellipse(windowWidth/2-90, windowHeight/2, 30, 30)
  ellipse(windowWidth/2-30, windowHeight/2, 30, 30)
  ellipse(windowWidth/2+30, windowHeight/2, 30, 30)
  strokeWeight(3)
  fill(0, 21, 255)
  ellipse(windowWidth/2+100, windowHeight/2, 45, 45)
  fill(61, 77, 255)
  ellipse(windowWidth/2+100, windowHeight/2, 35, 35)
  fill(156, 164, 255)
  ellipse(windowWidth/2+100, windowHeight/2, 25, 25)
  fill(0)
  ellipse(windowWidth/2+100, windowHeight/2, 15, 15)
  noStroke()
  fill(255)
  ellipse(windowWidth/2+100, windowHeight/2, 5, 5)
}


function purpFish(){
	strokeWeight(2)
  fill(231, 183, 247)
  stroke(188, 94, 219)
  beginShape()
    vertex(387, 391)
    vertex(360, 364)
    vertex(332, 369)
    vertex(331, 406)
    vertex(354, 424)
    vertex(389, 407)
  endShape()
  stroke(163, 94, 219)
  fill(163, 94, 219)
  beginShape()
    vertex(375, 387)
    vertex(366, 380)
    vertex(344, 375)
    vertex(340, 397)
    vertex(355, 410)
    vertex(390, 401)
  endShape()
  stroke(121, 94, 219)
  fill(231, 183, 247)
  ellipse(400,400,55,20)
  fill(64, 80, 184)
  circle(415, 398,8)
  noStroke()
  fill(255)
  circle(413, 396,5)
}

class fishies{
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, windowWidth)
    this.y = random(0, windowHeight)
    this.xSpeed = random(-1, 2)
    this.ySpeed = random(-1, 1)
  }
  createFish() {
    noStroke()
    push()
    translate(this.x, this.y)
       purpFish()
    pop()
  }
  moveFish() {
    if (this.x < 10 || this.x > 800)
      this.xSpeed *= -1
    if (this.y < 10 || this.y > 600)
      this.ySpeed *= -1
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}
function setup(){
  createCanvas(windowWidth,windowHeight);
	for (let i = 0; i < 30; i++) {
    fishALL.push(new(fishies))
  }
}

function draw(){
	print(frameCount);
	if (frameCount < 4 ){
    for( let x = 0; x < atlantis.width; x += 7){
      for( let y = 0; y < atlantis.height; y +=7 ){
        let find = atlantis.get(x,y);
        stroke(color(find));
        strokeWeight(18);
        point(x,y);
      }
    }
  }
	if (frameCount > 4 && frameCount < 8 ){
    for( let x = 0; x < atlantis.width; x +=5 ){
      for( let y = 0; y < atlantis.height; y +=5 ){
        let find = atlantis.get(x,y);
        stroke(color(find));
        strokeWeight(10);
        point(x,y);
      }
    }
  }
  if (frameCount > 8 && frameCount < 450){
    image(atlantis,0,0);
    image(welcome,400, 50, 600, 500);
  }
	if(frameCount > 450 && frameCount < 850){
		background(5, 51, 77);
		tint(255, 126);
		image(casFront, 0,0);
		fill(136, 169, 189);
		noTint();
		textFont(myFont);
		textSize(50);
		textWrap(WORD);
		text("You explore atlantis.", 490,50);
		text("This is a utopian city once lost and sunken underwater.", 190, 150);
		text("It has now resurfaced and so begins your adventure. ", 190, 250);
		text("Down into the submarine you go...", 370, 350);
	}
	if(frameCount > 850 && frameCount < 860){
		scene = 0
	}
	if (scene == 0){ 
		if (scene == 0 && key == ' '){ // press space to switch scenes
			scene = 1;
		}
		background(5, 51, 77);
		drawingContext.shadowBlur = 40
    drawingContext.shadowColor = '#2830c9'
		strokeWeight(2);
    let start=color(154, 195, 217);
    let finish=color(5, 51, 77);
    for(var x=-1;x<11;x++){
      stroke(255)
      let progress = lerpColor(start,finish,x/10)
      push()
        translate(0,x*width/22)
        fill(progress)
        push()
          beginShape()
          vertex(10,200)
          for(var i=0;i<width;i+=10){
            vertex(i,cos(i/(70+noise(x,frameCount/200)*30)+x+sin(x+frameCount/30))*30)
          }
          vertex(width,200)
          endShape(CLOSE)
        pop()
      pop()
		}
		image(sciFish,mouseX,80,150,150);
		image(spinFish,mouseX+400,500,180,150);
		image(spineFish,mouseX-600,250,150,150);
		for (let i = 0; i < 30; i++) {
      fishALL[i].createFish()
      fishALL[i].moveFish()
    }
	}
	if(scene == 1){
		fadeBlue()
		for(let i=0; i<1000; i++){
			let x = random(width);
			let y = random(height);
			let diameter = random(y/20.0);
			noStroke();
			fill(random(30,100),random(50,100),random(255,100),127);
			ellipse(x,y,diameter,diameter);
		}
		submarine() // tried to use sprite but would delete sin waves if done for some reason
		fill(255, 64, 116);
		rect(1150, 500, 200,100)
		fill(250, 217, 226);
		textSize(32);
		text("CONTINUE", 1165, 560);
		
	}
	if(scene == 2){ 
		background(5, 51, 77);
		tint(255, 126);
		image(castle, 0,0);
		noTint();
		fill(212, 255, 246);
  	rect(227, 248, 350);
		image(optOne, 227, 248);
		optOne.resize(350, 350);
		if (mouseX > 227 && mouseX < 577 && mouseY > 251 && mouseY < 599){
			fill(65, 148, 130);
			rect(227, 248, 350);
			fill(212, 255, 246);
			textSize(45);
			text("Enter The ", 310, 352);
			text("Captains Ship", 290, 433);
		}
		image(optTwo, 818, 248);
		optTwo.resize(350,350);
		if (mouseX > 818 && mouseX < 1168 && mouseY > 251 && mouseY < 599){
			fill(30, 2, 87);
			rect(818, 248, 350);
			fill(229, 217, 255);
			textSize(45);
			text("Enter The ", 910, 352);
			text("Kelp Forest", 890, 433);
		}
		fill(136, 169, 189);
		textFont(myFont);
		textSize(50);
		textWrap(WORD);
		text("Swimming up to the city,", 490,50);
		text("You stumble upon a forked road", 400, 150);
	}
	if (scene==3){
		fadeGreen();
			for(let i=0; i<900; i++){
			let x = random(width);
			let y = random(height);
			let diameter = random(y/50.0);
			noStroke();
			fill(random(0,140),random(153,255),random(255,100),127);
			ellipse(x,y,diameter,diameter);
			}
		beginShape();
		fill(0);
			vertex(1434, 772)
			vertex(1434, 395)
			vertex(1299, 379)
			vertex(1269, 452)
			vertex(1202, 524)
			vertex(1206, 594)
			vertex(1112, 655)
			vertex(998, 772)
			vertex(1434, 772)
		endShape();
    fill(1, 54, 42);
		beginShape();
		fill(10, 41, 34);
			vertex(0, 773)
			vertex(0, 713)
			vertex(264, 666)
			vertex(612, 568)
			vertex(1067, 579)
			vertex(1229, 765)
			vertex(0, 773)
		endShape();
		image(ship, 417,153);
		image(eye,1164, 399);
		eye.resize(300,300);
		fill(0);
		fill(255);
		textSize(30);
		text("YOU STOLE FROM THE CAPTAIN?", 39, 137)
		text("The city of Atlantis:", 39, 197)
		text("orders for your death.", 39, 257);
		text("Shame for greed.", 39, 318);
		}
	
	if (scene==4){
		background(30, 2, 87);
		for(let i=0; i<1000; i++){
			let x = random(width);
			let y = random(height);
			let diameter = random(y/20.0);
			noStroke();
			fill(random(0,134),random(0,100),random(64,255),127);
			ellipse(x,y,diameter,diameter);
		}
		image(ghost, 334, 177);
		ghost.resize(800, 400);
		image(kelp,170, 426);
		image(kelp,0, 700);
		image(kelp,1000, 426);
		kelp.resize(300,400);
		image(kelp,300, 426);
		fill(255);
		textSize(30);
		text("The Ghost Leviathan Likes You.", 39, 137)
		text("They take you to the Center of Treasures", 39, 197)
		text("You Survive.", 39, 257)
	}
	
	print(scene);
}
function mouseReleased(){
	if(scene == 1){
		if(mouseX > 1150 && mouseX < 1349 && mouseY > 502 && mouseY < 603){
			scene = 2;
		}
	}
	if(scene == 2){
		if (mouseX > 227 && mouseX < 577 && mouseY > 251 && mouseY < 599){
			scene = 3;
		}
		if (mouseX > 818 && mouseX < 1168 && mouseY > 251 && mouseY < 599){
			scene = 4;
		}
	}
}

