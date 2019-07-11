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

// var arr = [8, 5, 2, 6, 9, 3, 5, 4, 7];
// console.log(insertionSort(arr));



function combineArrs(arr1, arr2){
  var i = 0;
  var j = 0;
  while(i < arr1.length){
    if(arr2[j] < arr1[i]){
      insertAt(arr1, i, arr2[j]);
      j++
    } else {
      i++
    }
  }
  for(; j < arr2.length; j++){
    arr1.push(arr2[j])
  }
  return arr1
}

var arr1 = [2, 3, 3, 4, 6, 9];
var arr2 = [1, 2, 5, 6, 7, 8, 9, 12, 13];
var arr3 = [3, 5, 8];
console.log(combineArrs(arr1, arr2));



function insertAt(arr, position, value){
  for(var i = arr.length; i > position; i--){
    arr[i] = arr[i - 1];
  }
  arr[position] = value;
  return arr
}

// var arr = [1, 3, 4, 6, 7];
// console.log(insertAt(arr, 2, 34));