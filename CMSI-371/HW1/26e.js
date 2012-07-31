/* This program draws a purple "8" using overlapping
 * purple circles. It first draws two overlapping filled
 * purple circles, then draws two smaller white circles 
 * set on top of the centers of the purple circles to
 * create an 8.
 */

// sets up the canvas 
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// coordinates of top purple circle
var x = 50;
var y = 50;


function drawCircle(a, b, r, c) {

    // starting coordinates of circle
    var start_x = a;
    var start_y = b;
	var radius = r;

	// color of circle
    ctx.fillStyle = c;
    
	// draws circle
    ctx.beginPath();  
    ctx.arc(start_x,start_y,radius,0,Math.PI*2,true);
    ctx.fill();     
}

// draws two purple circles 
drawCircle(x, y, 30, "rgb(143, 0, 255)");
drawCircle(x, y + y, 30, "rgb(143, 0, 255)");

// draws two white circles on top of purple circles
drawCircle(x, y, 15, "white");
drawCircle(x, y + y, 15, "white");

