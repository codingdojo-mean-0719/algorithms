//Recursive Binary Search
//Given a sorted array and a value, recursively determine whether value 
//is found within array. rBinarySearch([1,3,5,6],4) = false ; 
//rBinarySearch([4,5,6,8,12],5) = true .


function rBinary(arr, val, start=0, end=arr.length){
    let mid=Math.floor((start+end)/2);
    if(arr[mid]=== val){
        return true;
    }
    console.log("first case", mid, start, end)
    if(start >= end){
        return false;
    }
    if(val < arr[mid]){
        return rBinary(arr, val, start, mid);
        //end = mid;
    }
    if(val>arr[mid]){ 
        return rBinary(arr, val, mid+1, end);
        //end = start;
    }

}
console.log(rBinary([1,3,5,6], 6));

  