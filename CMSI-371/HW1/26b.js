/* This program creates a grid of light green lines, 
 * that fills the entire canvas.
 * It does this by drawing green lines spaced horizontally 
 * and vertically equidistant from each other by 1/10th 
 * the height and width of the canvas to create 
 * the final grid.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

var x = 0;
var y = 0;

// makes lines light green
ctx.strokeStyle = "rgb(50, 205, 50)";

/* draws light green vertical lines equally 1/10th the
   canvas width apart that span height of the canvas
*/ 
for (var i = 0; i <= canvas_width; i += canvas.width/10) {
    ctx.beginPath();  
    ctx.moveTo(x + i,y);  
    ctx.lineTo(x + i,canvas.height);  
    ctx.stroke()
}

/* draws light green horizontal lines equally 1/10th the
   canvas height apart that span width of the canvas
*/ 
for (var j = 0; j <= canvas_width; j += canvas.width/10) {
    ctx.beginPath();  
    ctx.moveTo(x,y + j);  
    ctx.lineTo(canvas.width,y + j);  
    ctx.stroke()
}