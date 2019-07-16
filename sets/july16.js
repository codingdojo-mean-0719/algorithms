function mergeSortedArrays(arr1, arr2) {
  let newArr = [];
  let x = 0;
  let i = 0;
  while (x < arr1.length && i < arr2.length) {
    if (arr1[x] < arr2[i]) {
      newArr.push(arr1[x++]);
    } else {
      newArr.push(arr2[i++]);
    }
  }
  while (x < arr1.length) {
    newArr.push(arr1[x]);
    x++;
  }
  while (i < arr2.length) {
    newArr.push(arr2[i]);
    i++;
  }
  return newArr;
}

let arr1 = [1, 2, 2, 2, 7, 8, 9, 10];
let arr2 = [2, 2, 6, 6, 7];
console.log(mergeSortedArrays(arr1, arr2));