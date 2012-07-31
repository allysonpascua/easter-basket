/* This program draws a red "sphere" (circle with a radial
 * gradient) and the fake 3-d solid cube from Exercise 27b,
 * with recognizably shaped gray "shadows" underneath 
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


var square_dimension = 50;
var x = canvas.height*2/7;


/* draws dark gray square whose center is at the middle of the canvas horizontally and
   whose top border meets the top border of the canvas; is the front face of the fake
   3-d cube
*/
ctx.fillStyle = "rgb(84, 84, 84)";  
ctx.fillRect(canvas.width/2 - square_dimension, square_dimension/2+x, square_dimension, square_dimension);


// draws a slightly lighter gray polygon that looks like the top face of the fake 3-d cube
ctx.fillStyle = "rgb(120, 120, 120)";
ctx.beginPath();
ctx.moveTo(canvas.width/2 - square_dimension, square_dimension/2+x);
ctx.lineTo(canvas.width/2 - square_dimension/2, 0+x);
ctx.lineTo(canvas.width/2 + square_dimension/2, 0+x);
ctx.lineTo(canvas.width/2, square_dimension/2+x);
ctx.fill();


/* draws gray polygon (lighest shade of the three faces drawn) that looks like the right face
   of fake 3-d cube
*/
ctx.fillStyle = "rgb(211, 211, 211)";
ctx.beginPath();
ctx.moveTo(canvas.width/2 + square_dimension/2, 0+x);
ctx.lineTo(canvas.width/2 + square_dimension/2, square_dimension+x);
ctx.lineTo(canvas.width/2, 1.5 * square_dimension+x);
ctx.lineTo(canvas.width/2, square_dimension/2+x);
ctx.fill();


// red sphere
var sun = ctx.createRadialGradient(canvas.width/2 - 20,120 + canvas.width/10,60,0 + canvas.width/2,140 + canvas.width/10,90);  
    sun.addColorStop(0, "rgba(255,50,0,0.75)");  
    sun.addColorStop(0.7, 'rgba(255,0,0,0.75)');  
    sun.addColorStop(0.98, 'rgba(128,0,0,1)');  
    sun.addColorStop(0.99, 'white');  
    sun.addColorStop(1, 'rgba(255,255,255,0)');  

	ctx.fillStyle = sun;  
    ctx.fillRect(0,0,canvas.width,canvas.height); 

