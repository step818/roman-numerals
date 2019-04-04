

var romanRay = [];
var digitOne = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var digitTwo = [ "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var digitThree = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var digitFour = ["M", "MM", "MMM"]

$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var digits = number.split("").reverse();
    for (var i = 0; i < digits.length; i++) {
      var roman = digits[i] * (10**i);
      romanRay.push(roman);

        var ones= digitOne[digits[0] - 1];
        var tens = digitTwo[digits[1]-1];
        var hundreds = digitThree[digits[2]-1];
        var thousands = digitFour[digits[3]-1];
      }
    if (thousands) {
      console.log(thousands + hundreds + tens + ones)
    } else if (hundreds) {
      console.log(hundreds + tens + ones)
    } else if (tens) {
      console.log(tens + ones);
    } else if (ones) {
      console.log(ones);
    }
    });
  });
