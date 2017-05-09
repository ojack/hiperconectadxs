function setup() {
  createCanvas(640, 480);
  background(0)
}

function draw() {
	//background(0)
	
 		if(key=='D') {
 			ellipse(Math.random()*width, Math.random()*height, 10, 10)
 		}

 		if(key=='B'){
 			fill(sin(frameCount*0.01)*255+100, 0, 255, 10)
			rect(width/2, 0, mouseY, mouseX)
		}

		if(key=='G'){
			blendMode('difference')
		}

		if(key=='H'){
			for(var i = 0; i < 20; i++){
				for(var j = 0; j < 20; j++){

				}
			}
		}
	

}