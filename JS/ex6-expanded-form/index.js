/*
  Get the expanded form of a digit
*/

function expandedForm(num) {
  var digits = num.toString().split('').reverse();
  var units = 1;
  var arr = [];
  digits.forEach(function(val,index){
    val !== '0'? arr.push(val*Math.pow(10,index)): '';
  })
  console.log(arr.reverse().join(' + '));
}

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'