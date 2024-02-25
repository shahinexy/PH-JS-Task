// (1) You have an odd array [1,3,5,7,9]. Now convert this array in to an even array using array.map().
const myArr = [1, 3, 5, 7, 9];
const evenArr = myArr.map(number => number + 1);
console.log(evenArr);
console.log('=====================');

// (2) You are given an array say: [33,50,79,90,101,30]. Now return/get all the element which are divisible by 10 using array.filter() method.
const myArr2 = [33, 50, 79, 90, 101, 30];
const divisible = myArr2.filter(number => number % 10 == 0);
console.log(divisible);

// (3) You have an array of object:
// const instructor = [
//     {name : 'Nodi', age: 28, position: 'Senior'},
//     {name : 'Akil', age: 26, position: 'Junior'},
//     {name : 'Shobuj', age: 30, position: 'Senior'},
// ]
// you task is to display the instruction names that has the position senior using array filter.



// (4)
// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22},
// ];
// You have 3 object as array element, can you find the total sum from here. use array.reduce() to do this task. sume of age is 57;