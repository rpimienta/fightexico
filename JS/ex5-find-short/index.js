/*

 Given a string of words, return the length of the shortest word(s).

*/
function findShort(s){
  var arr=[];
  var res = s.trim().split(' ')
  for(var i=0; i < res.length; i++){
    arr.push(res[i].length);   
  }
  var shortest = Math.min.apply(null, arr);
  console.log(shortest);
}

findShort(" bitcoin take over the world maybe who knows perhaps"); //3

findShort(" This is a very simple test for me to see if code works")//1