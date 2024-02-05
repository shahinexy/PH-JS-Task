// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function myFunction (a,b,c){
    let multiply =  a*b*c;
    console.log(multiply);
}
myFunction(10,20,30);

console.log('====================');

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function myFunction2(x){
    if(x % 2 !== 0){
        console.log(x*2);
    }
    else{
        console.log(x/2);
    }
}
myFunction2(6)

console.log('=-==================');


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array){
    let avarage = 0;
    for(let element of array){
        avarage += element;
    }
    return avarage;
}
console.log(make_avg([2,3,4,1]));

console.log('==========================');

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(binary){
    let elements = binary.split('')
    let zeros = 0;
    for(let element of elements){
        if(element == 0){
            zeros += 1;
        }
    }
    return zeros;
}
console.log(count_zero('100110011010010'));

console.log('===============');


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(x){
    if(x % 2 === 0){
        return 'Even';
    }
    return 'Odd';
}
console.log(odd_even(8));
