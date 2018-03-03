 /*An isogram is a word that has no repeating letters, 
   consecutive or non-consecutive. Implement a function 
   that determines whether a string that contains only 
   letters is an isogram. Assume the empty string is an isogram. 
   Ignore letter case.
 */

function isIsogram(str){
  var obj = {};
  for(var i = 0 ; i < str.length; i++){
    var elem = str[i].toLowerCase();
    if(!obj.hasOwnProperty(elem)){
      obj[elem] = i;
    }
  }
  return Object.keys(obj).length === str.length;
}
if(isIsogram("Dermatoglyphics")){ console.log("is Isogram")}
if(!isIsogram("aba")){console.log("is NOT Isogram")}
if(!isIsogram("moOse")){console.log("is NOT Isogram")}