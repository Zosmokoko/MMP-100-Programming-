//The setup function only happens once
var
tree = 0;
shape = 0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,180,125); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(163,180,125,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),75,75); // center of canvas, 20px dia
  

  stroke(71,122,189);
  fill(tree);
  rect(random(width),tree,100,100);
  
  stroke(129,178,179);
  fill(157,35,239,100);
  rect(random(width),random(height),50,50);
}
  function mousePressed(){
    if(tree<=500){
      tree+=25;
    }else{

      tree = 0;
    }
  }
   function drawShape(){
    
    if(shape<=20){
      stroke(100,200,50);
      fill(tree);
      ellipse(random(width),random(height),75,75)
      shape+=1;
    }else if(shape<=30){
      stroke(tree);
      fill(tree);
      rect(randomw(width),random(height),100,100)

    }

    
   }




  




