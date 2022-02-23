let arr = [5, 3, 6, 4, 4, 7];
console.log('input: ' + arr);
let arrCopy = arr.slice(0, arr.length);
let result = [];

arrCopy.forEach((el, i) => {
  let index = min = 0;
	
  arr.reduce((a, b) => { min = (a <= b) ? a : b; return min; })
		  
  index =  arr.indexOf(min);

  result.push(i == arrCopy.length - 1 ? arr[0] : arr[index]);

  arr.splice(index, 1);			
});

console.log('output: ' + result);