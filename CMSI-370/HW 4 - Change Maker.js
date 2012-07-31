var report = function (celsius, fahrenheit) {
    document.getElementById("result").innerHTML =
        celsius + "\xb0C = " + fahrenheit + "\xb0F";
};

document.getElementById("changeButton").onclick = function () {
    var f = document.getElementById("changeTextfield").value;
    report((f - 32) / 1.8, f);
};

/*
function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }
*/
