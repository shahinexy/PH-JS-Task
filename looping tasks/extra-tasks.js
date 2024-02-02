const fruits = ['mango', 'banana', 'aple', 'coconat'];
for(let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log('===================');

// revarse array 
const fruitsRevarse = ['mango', 'banana', 'aple', 'coconat'];
for(let i =  fruitsRevarse.length - 1; i >= 0; i--){
    console.log(fruitsRevarse[i]);
}
console.log('===================');

// sum form an array 
const arraySum = [10, 20 ,30];
let  sumOFArray = 0;
for(let i = 0; i < arraySum.length; i++){
    sumOFArray += arraySum[i];
}
console.log(sumOFArray);

// swap array element 
const swapArray = [1,2,3,4,5];
let swap = swapArray[3];
swapArray[3] = swapArray[1] 
swapArray[1] = swap;
console.log(swapArray);