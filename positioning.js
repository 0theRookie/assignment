var string = "lighthouse in the house";

function countLetters (string) {
 var result = {};

 var newString = string.split(" ").join("");

 for (var i = 0; i < newString.length; i++) {
   var currentLetter = newString[i];

   if (!(currentLetter in result)) {
    result[currentLetter] = [i];
    // console.log(string.indexOf(string[i]));
    // console.log('==================')


   }
   else {
     result[currentLetter].push(i);
   }
 }
 return result;
}


console.log(countLetters(string));