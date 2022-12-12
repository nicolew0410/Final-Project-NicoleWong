let atlantis;
let fishALL = [];
let scene;

function preload(){
  atlantis = loadImage("atlantis.png");
  welcome = loadImage("welcome.gif");
	sciFish = loadImage("fish.png");
	spineFish = loadImage("spine.png");
	spinFish = loadImage("spinfish.png");
	myFont = loadFont("roll.otf");
	casFront = loadImage("atlantisfront.png");
	forked = loadImage("forked.jpeg");
	optone = loadImage("optone.jpg");
	opttwo = loadImage("opttwo.jpg");
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
		text("It has now resurfaced and so begins your adventure. ", 210, 250);
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
		background(5, 51, 77);
		tint(255, 126);
		image(forked, 0,0);
		noTint();
		textFont(myFont);
		textSize(50);
		textWrap(WORD);
		text("Swimming up to the city,", 490,50);
		text("You stumble upon a forked road", 400, 150);
		image(optone,200,300, 350,350);
		image(opttwo,900,300, 350, 350);
		fill(58, 25, 158)
		circle(750,500,100);
		fill(202, 173, 217)
		text("OR", 730, 500)
	}
}