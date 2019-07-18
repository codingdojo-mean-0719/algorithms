/*Recursive Fibonacci:
Write rFib(num) . Recursively compute and return num th Fibonacci value. 
As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 
Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). 
rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) = 0.
/ */
function rFib(num){
    // base 1 and base 2:
    if (num <= 0){
        return 0;
    }
    if (num < 2){
        return 1;
    }
    console.log("num: ", num);
    return rFib(num-2)+rFib(num-1);
    // (2) -> 0 + 1 = 1
    // (8) -> 8 + 13 = 21
}
console.log(rFib(7));
// 0 (0)
// 1 (1)
// 0 + 1 = 1 (2)
// 1 + 1 = 2 (3)
// 1 + 2 = 3 (4)
// 2 + 3 = 5 (5)
// 3 + 5 = 8 (6)
// 5 + 8 = 13 (7)
// 8 + 13 = 21 (8)
/*
function rSigma(num){ 
if(0>num){
return 0
}
return rSigma(num-1)+num
}
console.log(rSigma(5)) 
*/