/* This program draws a yellow smiley face with a radial gradient
 * to give it a faux spherical effect.
 */

// set up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// starting coordinates and radius
var x = 52;
var y = 50;
var radius = 30;


// draws yellow sphere
var happy = ctx.createRadialGradient(45,45,10,x,y,radius);  
happy.addColorStop(0, "yellow");  
happy.addColorStop(0.7, 'rgb(255,215,0)');  
happy.addColorStop(1, 'rgba(218,165,32,0)');  
ctx.fillStyle = happy;  
ctx.fillRect(0,0,canvas.width,canvas.height); 

// mouth
ctx.beginPath();	  
ctx.arc(x,y,radius*2/3,0,Math.PI,false);   
ctx.stroke();

// left eye
ctx.fillStyle = "black"
ctx.beginPath();  
ctx.arc(x - radius/5 - 5, y - radius/5,5,0,Math.PI*2,true); 
ctx.fill();

// right eye
ctx.fillStyle = "black"
ctx.beginPath();
ctx.arc(x + 2*radius/5, y - radius/5,5,0,Math.PI*2,true);
ctx.fill(); 