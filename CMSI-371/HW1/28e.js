/* This program draws a simple skyline scene,
 * where black building with yellow-lit windows
 * are set against a dark blue sky.
 * Building dimensions are random 
 * (you won't see the same skyline upon refreshing)
 */

// sets up canvas
var canvas = document.getElementById('hw1');
var ctx = hw1.getContext("2d"); 


// dark blue night sky
var sky = ctx.createLinearGradient(0,0,0,canvas.height);  
    sky.addColorStop(0, "rgb(25,25,112)");  
    sky.addColorStop(0.4, "rgb(72,61,139)");  
	sky.addColorStop(0.7, "rgb(49,79,79)"); 
    sky.addColorStop(1, "rgb(105,105,105)");  

    ctx.fillStyle = sky;  
	ctx.fillRect(0,0,canvas.width,canvas.height);  


/* factors previous buildings that have been drawn for 
   the window-drawing for loop
 */
var buildings_drawn = 0;


// draws skyline
for (var draw_building = 0; draw_building <= canvas.width; draw_building += random_width) {

    // draw randomly-sized buildings
    ctx.fillStyle = "black";

    var random_height = 30*(2 + Math.floor(Math.random()*(15 - 2))) - 10;
    var random_width = 60*(2 + Math.floor(Math.random()*(6 - 2))) + 10;
    ctx.fillRect(draw_building, random_height, random_width, canvas.height - random_height);


	/* draws yellow-lit windows spaced 10 pixels apart with 
	   a 10 pixel margin between the most outwardly drawn windows and the
	   edges of the buildings
	 */
    for (var i = 0; draw_building + i + 10 <= random_width - 30 + buildings_drawn; i += 30) { 
        //- 30 from spacing between window and building and one window
        for (var j = 0; random_height + 10 + j <= canvas.height - 30; j += 30) {
            ctx.fillStyle = "yellow";
			ctx.fillRect(draw_building + i + 10, random_height + j + 10, 20, 20);
	    }
    }


    buildings_drawn += random_width;
}