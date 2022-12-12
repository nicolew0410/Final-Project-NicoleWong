let atlantis;

function preload(){
  atlantis = loadImage("atlantis.png");
  welcome = loadImage('welcome.gif');
}
function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  if (frameCount < 100){
    for( let x = 0; x < atlantis.width; x +=5 ){
      for( let y = 0; y < atlantis.height; y +=5 ){
        let find = atlantis.get(x,y);
        stroke(color(find));
        strokeWeight(10);
        point(x,y);
      }
    }
  }
  if (frameCount > 100 && frameCount < 500){
    image(atlantis)
    image(welcome)
  }
  if (frameCount > 800){
    let start=color(154, 195, 217)
    let finish=color(5, 51, 77)
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
  }
}