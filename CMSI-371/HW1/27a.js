/* This program draws a fake 3-d green wireframe cube  
 * at the bottom right of the canvas
 */

// sets up the canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 

// side length of square
var square_dimension = 50;

ctx.strokeStyle = "rgb(0, 200, 0)";  // make lines for wire frame green

// draws square whose bottom and right sides drawn along bottom right canvas border 
ctx.strokeRect(canvas.width - square_dimension, canvas.height - square_dimension, square_dimension, square_dimension);

// draws square shifted half the width of the square to the left and half the width of the square up 
ctx.strokeRect(canvas.width - 1.5 * square_dimension, canvas.height - 1.5 * square_dimension, square_dimension, square_dimension);

// draws line connecting top left corners of both squares
ctx.beginPath();
ctx.moveTo(canvas.width - square_dimension, canvas.height - square_dimension);
ctx.lineTo(canvas.width - 1.5 * square_dimension, canvas.height - 1.5 * square_dimension);

// draws line connecting top right corners of both squares
ctx.moveTo(canvas.width, canvas.height - square_dimension);
ctx.lineTo(canvas.width - 0.5 * square_dimension, canvas.height - 1.5 * square_dimension);

// draws line connecting bottom left corners of both squares
ctx.moveTo(canvas.width - square_dimension, canvas.height);
ctx.lineTo(canvas.width - 1.5 * square_dimension, canvas.height - 0.5 * square_dimension);

// draws line connecting bottom right corners of both squares
ctx.moveTo(canvas.width, canvas.height);
ctx.lineTo(canvas.width - 0.5 * square_dimension, canvas.height - 0.5 * square_dimension);
ctx.stroke(); 


