/* This program contains the functions for my own web versions of a push button
 * and a labeled checkbox.  The functions relate to possible mouse events.
 * For the push button:
 *  - mouseOverButton = clicked button state
 *  - mouseOutButton = unclicked button state
 *  - mouseUpButton = unclicked button state
 *  - mouseDownButton = clicked button state
 *
 * For the checkbox:
 *  - initialized as unchecked checkbox
 *  - mouseOverCheckbox = checked/unchecked hover state
 *  - mouseOutCheckbox = checked/unchecked state
 *  - mouseUpCheckbox = checked/unchecked state
 *  - mouseDownCheckbox = checked/unchecked state
 *
 * Both components are designed to behave as similarly to their 
 * desktop equivalents, meaning they have a hover state and the 
 * user can back out of clicking a web component by clicking it
 * prior to letting go of the mouse button.
 */

mouseOverButton = function () { 
    document.getElementById('mybutton').src = "mybuttonimageclicked.jpg";
}

 mouseOutButton = function () { 
    document.getElementById('mybutton').src = "mybuttonimageunclicked.jpg";
}

mouseUpButton = function () { 
    document.getElementById('mybutton').src = "mybuttonimageunclicked.jpg";
	alert("Clicked!");
}
	  
mouseDownButton = function () { 
	document.getElementById('mybutton').src = "mybuttonimageclicked.jpg";
}

var button = document.getElementById("mybutton");
button.onmouseover = mouseOverButton;
button.onmouseout = mouseOutButton; 
button.onmousedown = mouseDownButton;
button.onmouseup = mouseUpButton;


//-------------------------------------------------------------------------------//
	
var checked = false;
      
mouseOverCheckbox = function () { 
	document.getElementById("mycheckbox").src = (checked) ? "mycheckboxcheckedhover.jpg" : "mycheckboxuncheckedhover.jpg";
}
	  
mouseOutCheckbox = function () { 
	document.getElementById("mycheckbox").src = (checked) ? "mycheckboxchecked.jpg" : "mycheckboxunchecked.jpg";
}
	  
mouseUpCheckbox = function () { 
	document.getElementById("mycheckbox").src = (checked) ? "mycheckboxchecked.jpg" : "mycheckboxunchecked.jpg";
	checked = !checked
	mouseOverCheckbox()
}
	  
mouseDownCheckbox = function () { 
	document.getElementById("mycheckbox").src = (checked) ? "mycheckboxchecked.jpg" : "mycheckboxunchecked.jpg";
}

setCheckboxLabel = function (label_ID, label) {
    document.getElementById(label_ID).innerHTML = label;
}
	  
var checkbox = document.getElementById("mycheckbox");
checkbox.onmouseover = mouseOverCheckbox;
checkbox.onmouseout = mouseOutCheckbox;
checkbox.onmousedown = mouseDownCheckbox;
checkbox.onmouseup = mouseUpCheckbox;
setCheckboxLabel("mycheckboxlabel", " My Checkbox");
