/* This program draws facsimiles of a baseball, a tennisball,
 * and a golfball using gradients to create a 3-d effect.
 */

// sets up the canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


/*
var x = 50;
var y = 50;
var radius = 30;
*/

// draws a baseball using gradients of varying shades of white
var baseball = ctx.createRadialGradient(45,45,10,52,50,30);  
baseball.addColorStop(0, "white");  
baseball.addColorStop(0.7, 'rgb(238,233,233)');  
baseball.addColorStop(1, 'rgba(205,201,201,0)');  
ctx.fillStyle = baseball;  
ctx.fillRect(0,0,canvas.width,canvas.height); 

// for red threading of baseball
ctx.strokeStyle = "rgba(200, 0, 0, 0.8)";

// draws red threading of baseball
ctx.beginPath();
ctx.arc(52 - 30, 50 + 30, 30, 0, Math.PI*3/2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(52 + 30, 50 - 30, 30, Math.PI/2, Math.PI, false);
ctx.stroke();

// draws tennisball using gradients of varying shades of lime green
var tennisball = ctx.createRadialGradient(145,45,10,152,50,30);  
tennisball.addColorStop(0, "rgb(173,255,47)");  
tennisball.addColorStop(0.8, 'rgb(122,254,0)');  
tennisball.addColorStop(1, 'rgba(205,201,201,0)');  
ctx.fillStyle = tennisball;  
ctx.fillRect(0,0,canvas.width,canvas.height); 

// for white lines on tennisball
ctx.strokeStyle = "white";

ctx.beginPath();
ctx.arc(152 - 30, 50 + 30, 30, 0, Math.PI*3/2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(152 + 30, 50 - 30, 30, Math.PI/2, Math.PI, false);
ctx.stroke();


var golfball = ctx.createRadialGradient(245,45,10,252,50,30);  
golfball.addColorStop(0, "white");  
golfball.addColorStop(0.7, 'rgb(238,233,233)');  
golfball.addColorStop(1, 'rgba(205,201,201,0)');  
ctx.fillStyle = golfball;  
ctx.fillRect(0,0,canvas.width,canvas.height); 
	
function drawGolfHole(a, b) {
    var start_x = a;
    var start_y = b;

    ctx.fillStyle = "rgb(205,201,201)";
    
    ctx.beginPath();  
    ctx.moveTo(start_x,start_y);  
    ctx.arc(start_x,start_y,2,0,Math.PI*2,true);
    ctx.fill();     
}


var golf_x = 222;
var golf_y = 20;
var golf_radius = 2;

for (var i = 5; golf_x + i < 282; i += 4 * golf_radius) {
    for (var j = 0; golf_y + j < 80; j += 4 * golf_radius) {
        drawGolfHole(golf_x + i, golf_y + j);
	}
}

/*
for (var k = 202; golf_x + k < 282; k += 4 * golf_radius) {
    for (var m = 0; golf_y + m < 80; m += 4 * golf_radius) {
        drawGolfHole(golf_x + k + 2 * golf_radius, golf_y + m + 2 * golf_radius);
	}
}
*/
