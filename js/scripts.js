$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();

    var userInput1 = parseInt($("input#num1").val()); //count to
    console.log(userInput1);
    var userInput2 = parseInt($("input#num2").val()); //count by
    console.log(userInput2);
    for (var i = 0; i <=userInput1; i += userInput2) {
      alert("The number is " + i);
      }

      // (userInput2; userInput2 <= userInput1; userInput2 += userInput2)
  });
});
