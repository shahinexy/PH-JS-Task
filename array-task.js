// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits = ['mango', 'banana', 'apple', 'jack fruit', 'lichi'];
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);



// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
const touristDestination = ['cox,s bazar', 'sent martain', 'silet'];
touristDestination.push('sajek');
touristDestination.push('banderdan', 'jaflong');
touristDestination.pop();
console.log(touristDestination);


// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
const books = ['sonar tori', 'ora tin jon', 'ses bike'];
const check = books.includes('ora tin jon')
console.log('Is ora tinjon book area added in this array:', check);



// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
const array = [23,45,667,53];
const string = 'this is a string';
const arrayIsArrayOrNot = Array.isArray(array);
const stringIsArrayOrNot = Array.isArray(string);
console.log('Is the First varaibel is a array:', arrayIsArrayOrNot, 'Is the second varaible is a array:', stringIsArrayOrNot);



// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
const firstName = 'Shahin ';
const lastName = 'Alam';
const conbine = firstName.concat(lastName);
console.log(firstName);
console.log(lastName);
console.log(conbine);