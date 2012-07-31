/* This program draws a brown hexagon.
 */

// sets up canvas 
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


// this function draws a brown hexagon    
function drawBrownHexagon() {
    var hex_dimension = 50;
    var start_x = 100;
    var start_y = 150;

	// makes brown
    ctx.fillStyle = "rgb(150, 75, 0)";
    
	// draws hexagon
    ctx.beginPath();  
    ctx.moveTo(start_x,start_y);  // starts at top right corner of hexagon
    ctx.lineTo(start_x + hex_dimension, start_y);  // draws right
    ctx.lineTo(start_x + (hex_dimension * 1.5), start_y + (hex_dimension * Math.sqrt(3) / 2));  // draws down right
    ctx.lineTo(start_x + hex_dimension, start_y + (hex_dimension * Math.sqrt(3))); // draws down left
    ctx.lineTo(start_x, start_y + (hex_dimension * Math.sqrt(3)));  // draws left
    ctx.lineTo(start_x - (hex_dimension * 0.5), start_y + (hex_dimension * Math.sqrt(3) / 2));  // draws up left
    ctx.lineTo(start_x, start_y); // draws up right
    ctx.fill();     
}

// function call
drawBrownHexagon();
