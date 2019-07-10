// function selectionSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var currentMin = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[currentMin] > arr[j]) {
//         currentMin = j;
//       }
//     }
//     var temp = arr[i];
//     arr[i] = arr[currentMin];
//     arr[currentMin] = temp;
//     console.log("iteration: " + i + " " + arr);
//   }
//   return arr;
// }

// var arr = [8, 5, 2, 6, 9, 3, 5, 4, 7];
// console.log(selectionSort(arr));



function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    currentMin = arr[i]
    for(var j = i - 1; j >= 0 && arr[j] > currentMin; j--){
      arr[j + 1] = arr[j]
        console.log(arr)
    }
    arr[j + 1] = currentMin;
  }
  return arr
}

var arr = [8, 5, 2, 6, 9, 3, 5, 4, 7];
console.log(insertionSort(arr));