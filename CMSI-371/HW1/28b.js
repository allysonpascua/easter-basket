/* This program draws a sunset scene, with a reddish sun
 * setting into a dark blue ocean horizon with a partial 
 * reflection showing on the ocean surface.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

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
    sun.addColorStop(0, "rgb(255,99,0)");  
	sun.addColorStop(0.7, 'rgb(255,69,0)');  
	sun.addColorStop(1, 'rgba(255,0,0,0)');  

	ctx.fillStyle = sun;  
	ctx.fillRect(0,0,canvas.width,canvas.height); 


// ocean horizon
var ocean = ctx.createLinearGradient(0,canvas.height*2/5,0,canvas.height);  
    ocean.addColorStop(0, "rgb(72,61,139)");  
    ocean.addColorStop(0.5, "rgb(65,105,225)");  
    ocean.addColorStop(1, "rgb(30,144,255)");  
  
    ctx.fillStyle = ocean;  
    ctx.fillRect(0,canvas.height*2/5,canvas.width,canvas.height);
  
// sun's reflection on ocean  
var sun_reflect = ctx.createRadialGradient(0 + canvas.width/2,150 + canvas.width/10,50,0 + canvas.width/2,140 + canvas.width/10,90);  
    sun_reflect.addColorStop(0, "rgba(255,140,0,0.1)");  
	sun_reflect.addColorStop(0.9, 'rgba(255,69,0,0.1)');  
	sun_reflect.addColorStop(1, 'rgba(255,0,0,0)');  
	
	ctx.fillStyle = sun_reflect;  
	ctx.fillRect(0,canvas.height*2/5,canvas.width,canvas.height); 
