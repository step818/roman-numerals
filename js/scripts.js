

var roman = [];

$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    $("#translation").append(number);
    var digits = number.split("").reverse();
    for (var i = 0; i < digits.length; i++) {
      var roman = digits[i] * (10**i);
      console.log(roman);
    }







    });
  });
