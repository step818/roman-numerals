

var romanRay = [];


$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();

    var digits = number.split("").reverse();
    for (var i = 0; i < digits.length; i++) {
      var roman = digits[i] * (10**i);
      romanRay.push(roman);
    if (digits[i] === "5"){
      $("#translation").append("it's five!");
    } else if (number === "4") {
      $("#translation").append("it's four");
    } else if (number === "9") {
      $("#translation").append("it's nine");
    }



    }
  console.log(romanRay)

    });

  //$("#translation").append(number);
  });
