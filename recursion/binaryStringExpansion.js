// Binary String Expansion

// You are given a string containing chars ‘ 0 ’, ‘ 1 ’, and ‘ ? ’. For every ‘ ? ’, either ‘ 0 ’or ‘ 1 ’ can be substituted. Write a recursive function to return array of all valid strings with ‘ ? ’ chars expanded to ‘ 0 ’or ‘ 1 ’. binStrExpand("1?0?") => ["1000","1001","1100","1101"] . If you use string functions such as slice() , use them sparingly, as they are expensive.
let string = '1?10?01',
  array = [],
  idx = string.indexOf('?');
// console.log(string.slice(4, 5));
// console.log('this is temp', temp);
array[0] = string.slice(string.indexOf(''), string.indexOf('?'));
// console.log('this is the first  half', string.slice(0, idx));
// console.log('this is the second half', string.slice(idx + 1));
// console.log('this is the array', array);
function binStrExpand(string, array = []) {
  const idx = string.indexOf('?');
  if (idx === -1) {
    array.push(string);
    return array;
  }
  const break1 = string.slice(0, idx),
    break2 = string.slice(idx + 1),
    newString = `${break1}0${break2}`,
    newString2 = `${break1}1${break2}`;
  binStrExpand(newString, array);
  binStrExpand(newString2, array);
  return array;
}

console.log(binStrExpand('1?0?'));
// for (let j = 0; j > string.lenght; j++){
//   for (let i = 0; i < string.lenght; i++){
//     if (string[1] === '?') {
//       array[j] = 0
//     } else {
//       array[j] = string[i];
//     }
//   }
// }

// '1?0?'

// ['1000','1000','1000','1000']
