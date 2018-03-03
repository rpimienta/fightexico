/*
Trolls are attacking your comment section!
A common way to deal with this situation is to 
remove all of the vowels from the trolls' comments, 
neutralizing the threat.

Your task is to write a function that takes a string 
and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" 
would become "Ths wbst s fr lsrs LL!".
*/
function disemvowel(str) {
  var obj = {a:1, e:2, i:3, o:4, u:5};
  str = str.split('').filter( (val) => {
    return !obj.hasOwnProperty(val.toLowerCase());
  })
  console.log(str.join(''));
}

disemvowel("This website is for losers LOL!")