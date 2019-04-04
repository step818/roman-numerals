



$(document).ready(function(){
  $("form#romanNum").submit(function(event){
    event.preventDefault();
    var number = $("input#inputNumber").val();
    $("#translation").append(number);
    var digits = number.split("").reverse();
    console.log(digits);






    });
  });
