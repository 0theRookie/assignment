// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(currentValue, i){

    if (currentValue === "Waldo") {
      // console.log(currentValue, i);
      found(currentValue, i);   // execute callback
    }

  })

}

function actionWhenFound(currentValue, i) {
  console.log("Found " + currentValue + " at index: " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);