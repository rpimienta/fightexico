/*
  A digital root is the recursive sum of all the digits in a number. 
  Given n, take the sum of the digits of n. If that value has two digits, 
  continue reducing in this way until a single-digit number is produced. 
  This is only applicable to the natural numbers.
*/
function digital_root(n) {
  var result = n.toString().split('').map(Number).reduce((acc, current) => acc+current);
  if(result.toString().split('').length >= 2 ){
    console.log('More than 2 values: '+ result)
    digital_root(result)
  }else{
    console.log(result);
  }
  
}

digital_root(166);
// => 4

digital_root(55);
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

digital_root(666);
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

digital_root(493193);
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2