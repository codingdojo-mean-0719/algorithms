function interleaveArray(arr, arr2) {
  let newArr = [];
  let x = 0;
  let i = 0;
  while (x < arr.length && i < arr2.length) {
    newArr.push(arr[x]);
    newArr.push(arr2[i]);
    x++;
    i++;
  }
  while (x < arr.length) {
    newArr.push(arr[x]);
    x++;
  }
  while (i < arr2.length) {
    newArr.push(arr2[i]);
    i++;
  }
  return newArr;
}

let arr1 = [77, 22, 11, 22];
let arr2 = [2, 6, 7, 2, 6, 2];
console.log(interleaveArray(arr1, arr2));

