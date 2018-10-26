var words = ["ground", "control", "to", "major", "tom"];

function map(listOfWords, cb){
  var newArr = [];
  for(var i = 0; i < listOfWords.length; i++){
    var result = cb(listOfWords[i]);
    // console.log(result);
    newArr.push(result);

  }
  console.log(newArr);
}

map(words, function(word) {
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

