var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(cV, i, input){
  var z = Math.sqrt(cV.x ** 2 + cV.y ** 2);
  return z;
});


console.log(result);