/*
  Convert to hex the given values
*/
function rgb(r, g, b){
  console.log(toHex(r)+toHex(g)+toHex(b));
}

function toHex(d){
  if(d <= 0){ return '00'; }
  if(d >= 255){ return 'FF'; }
  return d.toString(16).toUpperCase();
}

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0,0,0); // returns 000000
rgb(148, 0, 211); // returns 9400D3