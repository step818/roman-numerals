

var romanRay = [];
var digitOne = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var digitTwo = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var digitThree = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var digitFour = ["", "M", "MM", "MMM"]

$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var digits = number.split("").reverse();
    for (var i = 0; i < digits.length; i++) {
      var roman = digits[i] * (10**i);
      romanRay.push(roman);

        var ones= digitOne[digits[0]];
        var tens = digitTwo[digits[1]];
        var hundreds = digitThree[digits[2]];
        var thousands = digitFour[digits[3]];
      }
    if (number >= 4000) {
      $("#translation").append("This number is too high!");
    } else if (number < 1) {
      $("#translation").append("This number is too low!");
    } else if (thousands) {
      $("#translation").append(thousands + hundreds + tens + ones);
    } else if (hundreds) {
      $("#translation").append(hundreds + tens + ones);
    } else if (tens) {
      $("#translation").append(tens + ones);
    } else if (ones) {
      $("#translation").append(ones);
    }
    });
    $("#refresh").click(function(){
  location.reload();
    });
  });
