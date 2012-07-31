var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


var x = 52;
var y = 50;
var radius = 30;



var happy = ctx.createRadialGradient(45,45,10,x,y,radius);  
happy.addColorStop(0, "yellow");  
happy.addColorStop(0.7, 'rgb(255,215,0)');  
happy.addColorStop(1, 'rgba(218,165,32,0)');  
ctx.fillStyle = happy;  
ctx.fillRect(0,0,canvas.width,canvas.height); 

/*
ctx.beginPath();	  
ctx.quadraticCurveTo(100,80,82,80);
ctx.stroke(); 
*/

ctx.beginPath();  
//ctx.moveTo(x + radius, y);  
//ctx.bezierCurveTo(x + radius*Math.sqrt(3)/2 + 50, y, x + radius*Math.sqrt(3)/2 + 50, y - 70,x + radius*Math.sqrt(3)/2, y - radius/2);  


ctx.bezierCurveTo(150, 100, 50, 100,40, 60);  
ctx.stroke(); 


  



