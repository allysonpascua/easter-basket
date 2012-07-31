/* This program draws a 50% translucent red rectangle overlapping
 * a 50% translucent green rectangle.
 */

// sets up the canvas 
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


// function for drawing transparent red and green rectangles    
function drawTransparentRedGreenRectangles() {
    var square_dimension = 50
    var start_x = 100
    var start_y = 10
    
    ctx.fillStyle = "rgba(200, 0, 0, 0.5)";   // red rectangle
    ctx.fillRect (start_x, start_y, 2*square_dimension, square_dimension);
    ctx.fillStyle = "rgba(0, 200, 0, 0.5)";   // green rectangle
    ctx.fillRect (start_x + 30, start_y + 30, square_dimension, 2*square_dimension);

}
    
// function call	
drawTransparentRedGreenRectangles();