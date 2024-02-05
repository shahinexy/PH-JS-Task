// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reversArr = [];
for(let color of colors){
    reversArr.unshift(color)
}
console.log(reversArr);

console.log('================');

// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let number of numbers){
    if(number % 2 ===0){
        console.log(number);
    }
}

console.log('=======================');


// Use a for...of loop to concatenate all the elements of an array into a single string.
var array = ['Tom', 'Tim', 'Tin', 'Tik']
let concatStr = '';
for(let element of array){
    concatStr += element;
}
console.log(concatStr);

console.log('================');

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
let statement = 'I am a hard working person'
statement = statement.split(' ')
console.log(statement);
let reversStr = '';
for(let element of statement){
    reversStr = element + ' ' + reversStr;
}
console.log(reversStr);
