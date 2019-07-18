function intersectionUnsorted(arr1, arr2) {
  let newArr = [];
  let nums = {};
  for (let x = 0; x < arr2.length; x++) {
    if (nums[arr2[x]] === undefined) {
      nums[arr2[x]] = 1;
    } else {
      nums[arr2[x]] += 1;
    }
    console.log(nums);
  }
  for (let i = 0; i < arr1.length; i++) {
    console.log(nums);
    if (nums[arr1[i]] === undefined) {
      continue;
    } else if (nums[arr1[i]]) {
      newArr.push(arr1[i]);
      nums[arr1[i]] -= 1;
    }
  }
  return newArr;
}

let arr1 = [6, 7, 2, 7, 6, 2, 5, 3, 8, 54];
let arr2 = [2, 7, 2, 1, 2, 9, 2, 5, 6, 1, 3, 54];

console.log(intersectionUnsorted(arr1, arr2));
// [7,2,2]