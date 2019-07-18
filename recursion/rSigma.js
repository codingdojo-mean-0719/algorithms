let count =0;


// function printArray(arr,i=0){
//   const base = arr.length -1;
//   console.log(arr[i])
//   i = i+1
//   if(i > base){
//     return true
//   }
//   if(count++>100){
//     throw new Error('got infinite')
//   }
//   printArray(arr,i)
// }

// printArray([1,2,3,4])


// Write a recursive function that 
// given a number returns sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.


function rSigma(num){  
  if(0>num){
    return 0
  }
    return rSigma(num-1)+num
}

console.log(rSigma(5))