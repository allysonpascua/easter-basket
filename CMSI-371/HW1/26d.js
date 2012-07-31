/* This program creates a pink polka-dot pattern 
 * against a brown background by drawing small 
 * circles one full circle apart vertically and 
 * horizontally. This drawing process is repeated
 * in the spaces between to create a full polka-dot
 * pattern.
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// starting coordinate of first polka-dot
var x = 20;
var y = 20;
var radius = 10; // radius of each polka-dot

// creates a brown background
ctx.fillStyle = "rgb(150, 75, 0)";   
ctx.fillRect (0, 0, canvas.width, canvas.height);

// function for drawing circles
function drawCircle(a, b) {

    // starting coordinate of circle
    var start_x = a;
    var start_y = b;

	// circle color - pink
    ctx.fillStyle = "rgb(255, 192, 203)";
    
	// draws circle
    ctx.beginPath();  
    ctx.moveTo(start_x,start_y);  
    ctx.arc(start_x,start_y,radius,0,2*Math.PI,true);
    ctx.fill();     
}

/* Draws circles one full circle apart horizontally across canvas from 
   left to right. When it reaches the end, it starts again on the left
   side, but shifted one full circle length vertically down the canvas.
   The pattern repeats.   
*/
for (var i = 0; x + i < canvas.width; i += 4 * radius) {
    for (var j = 0; y + j < canvas.height; j += 4 * radius) {
        drawCircle(x + i, y + j);
	}
}

/* Does the same thing as the previous for loop, but the coordinates
   of the first circle drawn is shifted one full circle diameter down 
   and one full circle diameter to the right to complete the polka-dot 
   pattern.  The pattern repeats.
*/
for (var k = 0; x + k < canvas.width; k += 4 * radius) {
    for (var m = 0; y + m < canvas.height; m += 4 * radius) {
        drawCircle(x + k + 2 * radius, y + m + 2 * radius);
	}
}