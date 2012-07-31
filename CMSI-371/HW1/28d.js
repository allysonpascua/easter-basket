/* This program draws two stick-figure people, 
 * one wearing a black hat,
 * one with long hair
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// function for drawing plain stick figures
function drawStickFigure(x, y) {

    // head
    ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(x, y, 49, 0, Math.PI*2, true);
	ctx.fill();

	// body
	ctx.strokeStyle = "black";
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, Math.PI*2, true);
	
	// legs
	ctx.moveTo(x, y + 50);
	ctx.lineTo(x, y + 200);
	ctx.lineTo(x - 50, y + 300);
	ctx.moveTo(x, y + 200);
	ctx.lineTo(x + 50, y + 300);
	
	// arms
	ctx.moveTo(x, y + 125);
	ctx.lineTo(x - 50, y + 75);
	ctx.moveTo(x, y + 125);
	ctx.lineTo(x + 50, y + 75);
    ctx.stroke();

}


drawStickFigure(200, 200);
// draw black hat
ctx.fillStyle = "black";
ctx.fillRect(140, 150, 120, 20);
ctx.fillRect(150, 100, 100, 50);


// draw hair (back)
ctx.fillStyle = "rgb(160,82,45)";
ctx.beginPath();
ctx.moveTo(445, 300);
ctx.lineTo(445, 200);
ctx.arc(500, 200, 55, Math.PI, 0, false);
ctx.moveTo(555, 200);
ctx.lineTo(555, 300);
ctx.lineTo(445, 300);
ctx.fill();
 
 
// stick figure
drawStickFigure(500, 200);

// draw hair (bangs)
ctx.fillStyle = "rgb(160,82,45)";
ctx.beginPath();
ctx.moveTo(500, 190);
ctx.arc(500, 190, 53, Math.PI, 0, false);
ctx.fill();