/* This program draws a blue square whose center is at the 
 * center of the canvas
 */

// sets up canvas 
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// function that draws a blue centered square
function drawBlueCenteredSquare() {  

    // square width
    var square_dimension = 50;     
	
	// make blue
    ctx.fillStyle = "rgb(0, 0, 200)";  
	
	// draws square
    ctx.fillRect (canvas.width/2 - square_dimension/2, 
                  canvas.height/2 - square_dimension/2, 
                  square_dimension, 
                  square_dimension);
}
     
// function call    
drawBlueCenteredSquare();

