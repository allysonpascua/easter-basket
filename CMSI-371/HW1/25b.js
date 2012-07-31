/* This program draws a black perimeter around the canvas
 */

// sets up canvas 
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// function that draws black perimeter around canvas    
function drawBlackPerimeter() {
    ctx.strokeRect (0,0,canvas.width,canvas.height);    
}
   
// function call
drawBlackPerimeter();