let arr = [5, 3, 6, 4, 4, 7];
 console.log('input: ' + arr);
 let arrCopy = arr.slice(0, arr.length);
 let result = [];

 arrCopy.forEach(() => {
   let minElementIndex = 0;

   minElementIndex = arr.indexOf(Math.min.apply(Math, arr));

   result.push(arr[minElementIndex]);
   arr.splice(minElementIndex, 1);
 });

 console.log('output: ' + result);