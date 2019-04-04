

var romanRay = [];
var digitOne = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var digitTwo

$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var digits = number.split("").reverse();
    for (var i = 0; i < digits.length; i++) {
      var roman = digits[i] * (10**i);
      romanRay.push(roman);
      if (digits[0]) {
        var result = digitOne[number - 1];
        console.log(result)

    }


    }


    });


  });
