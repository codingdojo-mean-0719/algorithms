//Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

function arrBinary(array, num){
    let arr=array;
    let start=0;
    let end=arr.length;
    let mid=arr.length/2;
    mid=Math.floor(mid);
    console.log(mid)
    
    var stop=0;

    while(start < end){
        if(num == arr[mid]){
            return true;
        }
        //mid=Math.floor(mid);
        if(num < arr[mid]){
            console.log('moving mid to end', mid, end)
            end=mid;
        }
        else{
            console.log('moving start to mid', start, mid)
            start=mid+1;
        }
        mid=Math.floor((end+start)/2); 
        if(stop++ == arr.length){
            throw new Error("THis an infinit");
        }
    }
    
    
    return false;

}

console.log(arrBinary([2,3,4,5,7,8], 1))