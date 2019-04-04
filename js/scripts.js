
var digits = []


$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    $("#translation").append(number);
    var splitNumber= number.split("");
    digits.push(splitNumber);
    console.log(splitNumber)




    });
  });
