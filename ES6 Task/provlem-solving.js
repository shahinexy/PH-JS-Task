// (1) write an arrow function that will take 3 parameters, will multiply the parameter and return the result
const multiply = (x, y, z) => x * y * z;
console.log(multiply(5, 3, 7));
console.log('============');

// (2) Write the following sentence in three line and print the result: I am a web developer. i love to code. I love to eat biryani.
const templeteLiteral = `I am a web developer. 
I love code. 
I love biryani.`;
console.log(templeteLiteral);
console.log('=========');

// (3) Write an arrow function that will take 2 paramenter. One parameter will come from you and ther other will be a default parameter. add these two parameter and return the result.
const addpara = (x, y = 0) => x + y;
console.log(addpara(10));
console.log('===========');

// (4) Write an arrow function where it will fo the following:
// a) It will take an array where the array element will be the name of your friends.
// b) Check if the length of each element is even, push elements with even length to a new array and return the result.
const friends = ['shifat','rifat','kholil','emon','rafi', 'junayed','soyeb'];
const check = (names) => {
    let evenName = [];
    for(const name of names){
        if(name.length % 2 == 0){
            evenName.push(name);
        }
    }
    return evenName;
}
console.log(check(friends));
console.log('==============');

// (5) Write an arrow function where it will do the folloing:
// a) Square each array element.
// b) Calculate the sum of the aquare element.
// c) Return the average of the squared element.
const myArray = [2,34,8,54,2,5,66,45,7,9];
const everage = (numbers) => {
    let arrayLength = 0;
    let squarNumber = 0;
    for(const number of numbers){
        const squar = number ** 2;
        squarNumber += squar;
        arrayLength += 1;
    }
    return squarNumber / arrayLength;
}
console.log(everage(myArray));