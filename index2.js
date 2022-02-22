const number = 5;
let number1 = 5;
var number2 = 5;
 //not use
 //number = 7 - wrong;
number1 = 7;
const hello = 'hello world';
const numbers = [5, 7, 1, -1, 9];
const pavlo = {name: 'Pavlo', age: 14};
const yes = true;
const no = false;
if (yes){
} else if (no){
};
//console.log(numbers[2]);
function findMinimum(input){
  let min = input[0];  
    for (let i = 1; i < input.length; i = i + 1 ){
        if (input[i] < min ){
            min = input[i];
        }
    }
    return min;
}
console.log(findMinimum(numbers));

function sortNumbers(input){
   let min2 = findMinimum(numbers)
   for (let i = 1; i < input.length; i = i + 1 ){
       if (input[i] > min2){
    min2 = input[i];
   }
  } return min2;
}
