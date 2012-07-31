/* This program draws a sunset scene, with a reddish run
 * setting into a green horizon under a gray-blue sky
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// coordinates and radius for sun
var x = 50;
var y = 50;
var radius = 30;

// gray-blue sky
var sky = ctx.createLinearGradient(0,0,0,canvas.height/2);  
    sky.addColorStop(0, "rgb(30,144,255)");  
    sky.addColorStop(0.4, "rgb(135,206,250)");  
	sky.addColorStop(0.7, "rgb(183,183,183)"); 
    sky.addColorStop(1, "rgb(131,139,131)"); 
   
    ctx.fillStyle = sky;    
    ctx.fillRect(0,0,canvas.width,canvas.height*2/5);  

// reddish sun
var sun = ctx.createRadialGradient(0 + canvas.width/2,150 + canvas.width/10,50,0 + canvas.width/2,140 + canvas.width/10,90);  
    sun.addColorStop(0, "rgba(255,69,0,0.9)");  
    sun.addColorStop(0.7, 'rgba(255,0,0,0.6)');  
    sun.addColorStop(1, 'rgba(128,0,0,0)');  
	
    ctx.fillStyle = sun;  
    ctx.fillRect(0,0,canvas.width,canvas.height); 


// green horizon
var ground= ctx.createLinearGradient(0,canvas.height*2/5,0,canvas.height);  
    ground.addColorStop(0, "rgb(107,142,35)");   
    ground.addColorStop(0.5, "rgb(154,205,50)");  
    ground.addColorStop(1, "rgb(107,142,35)");  
  
    ctx.fillStyle = ground;   
    ctx.fillRect(0,canvas.height*2/5,canvas.width,canvas.height);  


 

  



