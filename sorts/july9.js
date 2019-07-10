function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentMin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[currentMin] > arr[j]) {
        currentMin = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[currentMin];
    arr[currentMin] = temp;
    console.log("iteration: " + i + " " + arr);
  }
  return arr;
}

var arr = [8, 5, 2, 6, 9, 3, 5, 4, 7];
console.log(selectionSort(arr));