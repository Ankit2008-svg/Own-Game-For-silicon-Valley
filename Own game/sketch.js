var intro_daniel;
var daniel;
var d_walk;
var w,h;
var b_set;
var arrow;
var next_arrow;


function preload(){
  daniel = createImg("Images/Man Walking.gif");
  b_set = loadImage("Images/Jungle.jpg");
  arrow = loadImage("Images/Next.png");
}

function setup() { 
  createCanvas(displayWidth-60,displayHeight-150); 
  intro_daniel = new Intro();
  next_arrow = createSprite(800, 330);
  next_arrow.addImage(arrow);
  next_arrow.scale=0.2;
  daniel.position(200,100);
  w=daniel.width;
  h=daniel.height;
  console.log("Hello");
  daniel.size(w/2, h/2);
  console.log(w);
  console.log(h);
  
  } 
  
  function draw() { 
    background(b_set);
    intro_daniel.story();
    drawSprites();
    //console.log(mouseY);
  }

    