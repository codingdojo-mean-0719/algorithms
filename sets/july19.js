function unionUnsorted(arr1, arr2){
    let newArr = [];
    let nums = {}
    for(let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
        if(nums[arr1[i]] === undefined){
            nums[arr1[i]] = 0;
        } 
        nums[arr1[i]] += 1;
    }
    for(let x = 0; x < arr2.length; x++){
        if (nums[arr2[x]] === undefined || --nums[arr2[x]] < 0) {
            newArr.push(arr2[x]);
        }
    }
    return newArr;
}

let arr1 = [2,7,2,1,2];
let arr2 = [6,7,2,7,6,2];
console.log(unionUnsorted(arr1, arr2))
//[2,7,2,1,6,7,6,2]