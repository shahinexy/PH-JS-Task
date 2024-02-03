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
console.log('===============');

// find array element index number 
const indexArray = ['mango', 'banana', 'apple', 'coconat'];
const target = 'apple';
let foundIndex = -1;
for(let i =0; i < indexArray.length; i++){
    const currentIndex = indexArray[i]
    if(currentIndex === target){
        foundIndex = i;
    }
}
if(foundIndex > -1){
    console.log('The array element index is:', foundIndex);
}
else{
    console.log('Not Found');
}


//  Find max / min number from an array 
const maxMin = [20,60,30,22,10,40];
let max = maxMin[0];
let min = maxMin[0];
for(let i = 0; i < maxMin.length; i++){
    let current = maxMin[i];
    if(max < current){
        max = current;
    }
    if( min > current){
        min = current;
    }
}
console.log('maximum number is:', max, 'and the minimum number is:', min); 
console.log('================');

// Filter in an array 
const filterArray = [20,60,30,22,10,40];
let filterResult = [];
for(let i = 0; i < filterArray.length; i++){
    current = filterArray[i];
    if(current <= 30){
        filterResult.push(current);
    }
}
console.log(filterResult);
console.log('==============');

// filter and give discount 
const discountArray = [20,60,30,22,10,40];
let discount = [];
for(let i = 0; i < discountArray.length; i++){
    current = discountArray[i];
    if(current >= 30){
        let calculetDiscount = current - current * 10 / 100;
        discount.push(calculetDiscount);
    }
    else{
        discount.push(current)
    }
}
console.log(discount);

console.log('==================');


// frequencey array 
const frequencyArray = [0,0,0,0,0,0,0,0,0,0]
const number = '1224546542633446029780';
for(let i = 0; i < number.length; i++){
    current = number[i];
    frequencyArray[current]++;
}
console.log(frequencyArray);
console.log('===================');

// find out the miximum occurance
let maxOccurance = frequencyArray[0]
let maxOccuranceIndex = 0;
for(let i =0; i < frequencyArray.length; i++){
    const currentOccurance = frequencyArray[i];
    if(currentOccurance > maxOccurance){
        maxOccurance = currentOccurance;
        maxOccuranceIndex = i;
    }
}
console.log('maxOccurance:', maxOccurance, 'maxOccuranceIndex:', maxOccuranceIndex);

console.log('=============================');

// serial change an array 
const serial = [10,90,30,40,50,20,60,70,80];
let targetNumber = 30;
for(let i = 0; i < serial.length; i++){
    current = serial[i]
    if(current === targetNumber){
        break;
    }
    let removeElement = serial.shift()
    serial.push(removeElement);
}
console.log(serial);