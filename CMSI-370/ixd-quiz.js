var postscore = function(s) {
    document.getElementById("score text").style.visibility = "visible"
    document.getElementById("total").innerHTML = s + " / 10";   
};

var score = 0;

//////////////////// radio variables ////////////////////////


var selected_radio;

var radio_submitted = {
    "q01": document.quiz.question1,
    "q02": document.quiz.question2,
    "q03": document.quiz.question3,
    "q08": document.quiz.question8,
    "q09": document.quiz.question9,
    "q10": document.quiz.question10
};


var radio_choices = { 
    "q01": ["q01c1color","q01c2color"],
    "q02": ["q02c1color","q02c2color"],
    "q03": ["q03c1color","q03c2color"],
    "q08": ["q08c1color","q08c2color","q08c3color","q08c4color"],
    "q09": ["q09c1color","q09c2color","q09c3color","q09c4color"],
    "q10": ["q10c1color","q10c2color","q10c3color","q10c4color"] 
};


var radio_blanks = {
    "q01": "q01blank",
    "q02": "q02blank",
    "q03": "q03blank",
    "q08": "q08blank",
    "q09": "q09blank",
    "q10": "q10blank"
};



////////////////////////  Checkbox Variables ////////////////////////

//var checkbox_correct_choices = ["q04c1", "q04c2", "q04c4", "q05c4"];


var checkbox_correct = {
    "q04": [true, true, false, true],
    "q05": [false, false, false, true]
}

var start_where = 0;

var checkbox_choices = {
    "q04": ["q04c1color","q04c2color","q04c3color","q04c4color"],
	"q05": ["q05c1color","q05c2color","q05c3color","q05c4color"]
}

var checkbox_blanks = {
    "q04": "q04blank",
	"q05": "q05blank"
}

//////////////////////// Text Variables /////////////////////////////

var text_submitted = [document.quiz.question6, document.quiz.question7];

var text_choices = ["q06", "q07"];

var text_answers = ["Semantic", "Natural Language"];

var text_blanks = ["q06blank", "q07blank"];

/////////////////////////// Functions ///////////////////////////////

var displaycorrect = function (c) {
    document.getElementById(c + "color").style.backgroundColor = "green";
    document.getElementById(c + "color").style.color = "white";        
}


var displayincorrect = function (c) {
    document.getElementById(c + "color").style.backgroundColor = "red";
    document.getElementById(c + "color").style.color = "white";        
}


//--------------------------------------------------------------------//


var checkradioanswer = function(rs, rc, rb) {

    selected_radio = false; //check if user submitted an answer for each question

    for (var i in rs) {
        if (rs[i].checked) {
            score +=  +rs[i].value; //if correct will add 1 to score

        //if correct, make green and if incorrect, make red//
            document.getElementById(rc[i]).style.backgroundColor = (+rs[i].value === 1) ? "green" : "red" 
            document.getElementById(rc[i]).style.color = "white";
            selected_radio = true;
        }          

    
    //displays correct answers (highlights green)      
        if (+rs[i].value === 1) {
            document.getElementById(rc[i]).style.backgroundColor = "green";
            document.getElementById(rc[i]).style.color = "white";
        }



    }

 //make visible divs saying user left question blank if nothing selected
    if (selected_radio === false) {
        document.getElementById(rb).style.visibility = "visible";            
    }
}


//--------------------------------------------------------------------//



//var check_checkboxanswer = function (cc) {
var check_checkboxanswer = function (cc, ccolor, cb) {

    var elements_length = document.quiz.elements.length;
    var unchecked = [];
    var p=0, matches=0, blanks=0;
	

    for (var j=0,k=0,submitted=[]; j<elements_length; j++) { 
        var type = quiz.elements[j].type;
        if (type =="checkbox") {
            submitted[k] = quiz.elements[j].checked;
            k += 1;
        }
    }



    for (var m=0; m < cc.length; m++) {
        if (submitted[m + start_where] === cc[m]) {
		    matches += 1;
			document.getElementById(ccolor[m]).style.backgroundColor = "green";
            document.getElementById(ccolor[m]).style.color = "white";
		} else {
			document.getElementById(ccolor[m]).style.backgroundColor = "red";
            document.getElementById(ccolor[m]).style.color = "white";		    
		}
		
		blanks += (submitted[m + start_where] === false) ? 1 : 0;
		if (blanks === cc.length) {
		    blanks = 0; 
			document.getElementById(cb).style.visibility = "visible";
		}
    }    

	
	score += (cc.length === matches) ? 1 : 0;
	
    start_where += cc.length

    
//    alert(submitted);    
//    alert(score);


}




//--------------------------------------------------------------------//


var checktextanswer = function(t, tc, key, tb) {

    if (t.value.toUpperCase() === key.toUpperCase()) {
        score += 1;
        document.getElementById(tc).style.backgroundColor = "green";

    } else if (t.value === "") {
            document.getElementById(tb).style.visibility = "visible";  
       
    } else {
        document.getElementById(tc).style.backgroundColor = "red";
        document.getElementById(tb).innerHTML = key;
        document.getElementById(tb).style.backgroundColor = "green";
        document.getElementById(tb).style.visibility = "visible";       
    }

}


//----------------------------------------------------------------------//


document.getElementById("submit").onclick = function () {

    for (var a in radio_submitted) {
        checkradioanswer(radio_submitted[a], radio_choices[a], radio_blanks[a]);
    }

	for (var x in checkbox_correct) {
        check_checkboxanswer(checkbox_correct[x], checkbox_choices[x], checkbox_blanks[x]);
	}

    for (var b in text_submitted) {
        checktextanswer(text_submitted[b], text_choices[b], text_answers[b], text_blanks[b]);
    }


    postscore(score);
    score = 0; // reset score;
    document.getElementById("submit").disabled = "disabled";
    
};