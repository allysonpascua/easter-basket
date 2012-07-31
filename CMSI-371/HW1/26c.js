/* This program creates a honeycomb pattern 
 * by drawing a series of brown non-solid 
 * hexagons on top of a yellow background.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// starting coordinate of first hexagon (top left corner)
var x = 0;
var y = 0;
var hex_dimension = 20; //length of each side of hexagon

// make canvas background lavender
ctx.fillStyle = "yellow";   
ctx.fillRect (0, 0, canvas.width, canvas.height);


// draws hexagon
function drawHexagon(a, b) {

    // coordinates of hexagon (top left corner)
    var start_x = a;
    var start_y = b;

	// color of hexagon outline - brown
    ctx.strokeStyle = "rgb(150, 75, 0)";
    
	// draws actual hexagon
    ctx.beginPath();  
    ctx.moveTo(start_x,start_y);  
    ctx.lineTo(start_x + hex_dimension, start_y);  
    ctx.lineTo(start_x + (hex_dimension * 1.5), start_y + (hex_dimension * Math.sqrt(3) / 2)); 
    ctx.lineTo(start_x + hex_dimension, start_y + (hex_dimension * Math.sqrt(3))); 
    ctx.lineTo(start_x, start_y + (hex_dimension * Math.sqrt(3))); 
    ctx.lineTo(start_x - (hex_dimension * 0.5), start_y + (hex_dimension * Math.sqrt(3) / 2)); 
    ctx.lineTo(start_x, start_y); 
    ctx.stroke();     
}

// draws hexagons horizontally across the canvas 1.5 hexagons apart, then repeats vertically down the canvas 
for (var i = 0; x + i + hex_dimension * 1.5 <= canvas.width; i += 3 * hex_dimension) {
    for (var j = 0; y + j + hex_dimension * Math.sqrt(3) <= canvas.height; j += hex_dimension * Math.sqrt(3)) {
        drawHexagon(x + i, y + j);
	}
}

// does same thing as previous for loop, but shifted to fill in the gaps and create the full honeycomb pattern
for (var k = 0; k <= canvas.width; k += 3 * hex_dimension) {
    for (var m = 0; y + m + hex_dimension * Math.sqrt(3) <= canvas.height; m += hex_dimension * Math.sqrt(3)) {
        drawHexagon(x + (hex_dimension * 1.5) + k, y + (hex_dimension * Math.sqrt(3) / 2) + m);
	}
}

