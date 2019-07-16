//Recursive Factorial
//Given num , return the product of ints from 1 up to num . If less than zero, 
//treat as zero. If not integer, truncate. Experts tell us 0! is 1 . //
//rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
//let count=0;

// function rSigma(num){  
//     if(0>num){
//       return 0
//     }
//       return rSigma(num-1)+num
//   }
  
//   console.log(rSigma(5))

// function rFactorial(num){
    
//     if(num<1){
//         return 1; 
//     }
//     return rFactorial(num-1)*Math.floor(num);
// }
// console.log(rFactorial(6.5));

const canvas = [ 
    [3,2,3,4,3], 
    [2,3,3,4,0], 
    [7,3,3,5,3], 
    [6,5,3,4,1], 
    [1,2,3,3,3],
];
function floodFill(canvas, startCoor, newColor, oldColor){
    const [y, x]= startCoor;
    const currentColor= (canvas[y][x]);
    
    if(oldColor === undefined){
        oldColor = currentColor;
    }
    if(currentColor != oldColor){
        return;
    }
    canvas[y][x] = newColor;
    //move thrue row x
    if(x+1 < canvas[y].length){
        floodFill(canvas, [y, x+1],newColor, oldColor);
    }
    if(x-1 >= 0){
        floodFill(canvas, [y, x-1],newColor, oldColor); 
    }
    if(y+1 < canvas.length){
        floodFill(canvas, [y+1, x],newColor, oldColor); 
    }
    if(y-1 >=0){
        floodFill(canvas, [y-1, x],newColor, oldColor);
    }
    return canvas;
}
console.log(floodFill(canvas, [2, 2], 9));