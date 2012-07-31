/* This program creates a grid of lavender squares, 
 * one pixel apart, filling the entire canvas.
 * It does this by setting the background to lavender, 
 * and drawing white lines 1 px wide spaced horizontally 
 * and vertically equidistant from each other to create 
 * the final grid.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// coordinates where first grid line is drawn
var x = 0;
var y = 0;

// make canvas background lavender
ctx.fillStyle = "rgb(224, 176, 255)";   
ctx.fillRect (0, 0, canvas.width, canvas.height);

// make grid lines white
ctx.strokeStyle = "white";

/* draws white vertical lines equally 1/10th the
   canvas width apart that span height of the canvas
*/ 
for (var i = 0; i <= canvas.width; i += canvas.width/10) {
    ctx.beginPath();  
    ctx.moveTo(x + i,y);  
    ctx.lineTo(x + i,canvas.height);  
    ctx.stroke()
}


/* draws white horizontal lines equally 1/10th the
   canvas height apart that span width of the canvas
*/ 
for (var j = 0; j <= canvas.width; j += canvas.width/10) {
    ctx.beginPath();  
    ctx.moveTo(x,y + j);  
    ctx.lineTo(canvas.width,y + j);  
    ctx.stroke()
}