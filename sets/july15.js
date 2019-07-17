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

// let arr1 = [77, 22, 11, 22];
// let arr2 = [2, 6, 7, 2, 6, 2];
// console.log(interleaveArray(arr1, arr2));

function intersectArray(arr1, arr2){
  let newArr = [];
  let x = 0;
  let i = 0;
  while(x < arr1.length && i < arr2.length){
    if(arr1[x] === arr2[i]){
      newArr.push(arr1[x]);
      x++
      i++
    } else if(arr1[x] < arr2[i]){
      x++
    } else {
      i++
    }
  }
  return newArr;
}


function intersectArray2(arr1, arr2){
  let x = 0;
  let i = 0;
  counter = 0;
  while(x < arr1.length && i < arr2.length){
    if(arr2[i] < arr1[x]){
      i++
    } else {
      if(arr1[x] === arr2[i]){
        arr1[x - counter] = arr2[i++]
      } else {
        counter++
      }
      x++
    }
  }
  arr1.length -= counter;
  return arr1;
}


let arr1 = [1,2,2,2,7,8,8,9];
let arr2 = [2,2,6,6,7,9];
console.log(intersectArray2(arr1, arr2));