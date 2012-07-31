/* This program draws a fake solid 3-d cube, with its 
 * three visible faces colored in varying shades of gray,
 * at the top center of the canvas.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

//var canvas_width = canvas.width;
//var canvas_height = canvas.height;
var square_dimension = 50;

/* draws dark gray square whose center is at the middle of the canvas horizontally and
   whose top border meets the top border of the canvas; is the front face of the fake
   3-d cube
*/
ctx.fillStyle = "rgb(84, 84, 84)";  
ctx.fillRect(canvas.width/2 - square_dimension, square_dimension/2, square_dimension, square_dimension);

// draws a slightly lighter gray polygon that looks like the top face of the fake 3-d cube
ctx.fillStyle = "rgb(120, 120, 120)";
ctx.beginPath();
ctx.moveTo(canvas.width/2 - square_dimension, square_dimension/2);
ctx.lineTo(canvas.width/2 - square_dimension/2, 0);
ctx.lineTo(canvas.width/2 + square_dimension/2, 0);
ctx.lineTo(canvas.width/2, square_dimension/2);
ctx.fill();

/* draws gray polygon (lighest shade of the three faces drawn) that looks like the right face
   of fake 3-d cube
*/
ctx.fillStyle = "rgb(211, 211, 211)";
ctx.beginPath();
ctx.moveTo(canvas.width/2 + square_dimension/2, 0);
ctx.lineTo(canvas.width/2 + square_dimension/2, square_dimension);
ctx.lineTo(canvas.width/2, 1.5 * square_dimension);
ctx.lineTo(canvas.width/2, square_dimension/2);
ctx.fill();

// this draws a black border around the canvas
ctx.strokeRect (0,0,canvas.width,canvas.height);

