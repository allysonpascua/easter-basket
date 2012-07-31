/* This program initializes with a title, a text field, and a "submit" button
 * The text field has a placeholder text that asks the user to enter a number of U.S. coins to convert
 * The user must click the "make change button" to calculate the smallest amount of coins required to
   match the value entered by the user
 * Once the user does this, the program first outputs the amount of coins entered by the user on a line
   of text below the text field
 * The text field placeholder text returns to the default value "Please enter a number of U.S. coins
   to convert"
 * There are essentially 4 elements for the coin images (initially blank) and 4 corresponding elements 
   for text (initially blank)
 * The program first calculates the smallest amount of coins required to match the value entered by the 
   user and inserts answers into an array called out_change
 * This array holds the number of ['quarters', 'dimes', 'nikels', 'pennies']
 * Once this is calculated, the program goes to the first coin image/text element on the web page
 * If the first element of out_change is greater than zero, then the corresponding web element holding 
   the first coin image and text will be updated with the corresponding image and text
 * If the first web element of out_change is equal to zero, then the program will move on to the next 
   web element until the element's value is greater than zero.  Once the program finds a value greater 
   than zero, it finds the corresponding picture element and text and repeats this process.
 * If all values of out_change are equal to zero, then the program will not display anything the the text 
   below the text field will display "The equivalent of 0 U.S. coins is 0"
*/

var report = function (c) {
    document.getElementById("result").innerHTML = c;
};

var denominations = [25, 10, 5, 1];

//address singular/plural cases
var denominations_text = [" quarters", " dimes", " nickels", " pennies", " quarter", " dime", " nickel", " penny"];

var which_coin, plural_or_single

// coin images used (quarter, dime, nikel, penny, blank)
var coin_images = ["http://www.frbatlanta.org/publica/brochure/fundfac/images/coinsimages/quarterfront.gif",
                   "http://www.frbatlanta.org/publica/brochure/fundfac/images/coinsimages/dimefront.gif",
                   "http://www.frbatlanta.org/publica/brochure/fundfac/images/coinsimages/nifront.gif",
                   "http://www.frbatlanta.org/publica/brochure/fundfac/images/coinsimages/pennyfront.gif",
                   "http://rocketdock.com/images/screenshots/Blank.png"];

//element id for coin images
var coin_image_elements = ["coin image 1",
                           "coin image 2",
                           "coin image 3",
                           "coin image 4"];

//element id for coin text
var required_coin_amounts = ["required coin 1",
                             "required coin 2",
                             "required coin 3",
                             "required coin 4"];

//clear placeholder text every time user clicks inside text field
clearText = function(t) {
    t.value = ""
}


document.getElementById("changeButton").onclick = function () {

    var in_change = document.getElementById("changeTextfield").value;
    var out_change = [];
	var no_coins = 0;


    if (isNaN(in_change) || (in_change%1 !== 0)) { //if not a number and an integer (or decimal ending in .0)
        alert("Please enter an integer number of coins"); //inform user to enter a valid input
    } else {

        report("The equivalent of " + Math.floor(in_change) + " U.S. cents is: "); //remind user of input

        //calculate least number of coins required for each denomination
        for (var i in denominations) {
            out_change[i] = (in_change - in_change%denominations[i]) / denominations[i];
            in_change = in_change % denominations[i];   
			no_coins += (out_change[i] > 0) ? 0 : 1;
        }
		
    
        which_coin = 0; //reset to 0 every time before a new calculation is made

        /* if the calculated amount of change is not equal to 0
		 * determine if plural or single
		 * use the coin image that matches the demonination that was just calculated
		 * display the required amout of coins for the current denomination 
		*/
        for (var j in out_change) {        
            if (out_change[j] != 0) {
                plural_or_single = (out_change[j] === 1) ? denominations_text[+j + denominations.length] : denominations_text[+j]
                document.getElementById(coin_image_elements[which_coin]).src = coin_images[j];
                document.getElementById(required_coin_amounts[which_coin]).innerHTML = out_change[j] + plural_or_single;
                which_coin++
            } 
        
        };

		if (no_coins === out_change.length) {
		    report("The equivalent of " + Math.floor(in_change) + " U.S. cents is 0 coins");
		}
		
        //insert blank image for denominations if no coins were needed (user entered 0)
        while (which_coin <= 3) {
            document.getElementById(coin_image_elements[which_coin]).src = coin_images[4];
            document.getElementById(required_coin_amounts[which_coin]).innerHTML = "";
            which_coin++
        };
        

		//provide small set of instructions for user
        document.getElementById("changeTextfield").value = "Please enter a number of U.S. cents to convert"


    };
};








