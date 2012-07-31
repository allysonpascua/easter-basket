/* This program draws an orange "x" whose lines span the upper-left 
 * to lower-right corners and lower-left to upper-right corners of 
 * the canvas respectively
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// function that draws an orange x spanning corners of canvas    
function drawOrangeX() {
    ctx.strokeStyle = "orange";
    ctx.beginPath();  
    ctx.moveTo(0,0);  
    ctx.lineTo(canvas.width, canvas.height); 
    ctx.moveTo(canvas.width, 0)
    ctx.lineTo(0,canvas.height); 
    ctx.stroke();
}

// function call
drawOrangeX();
