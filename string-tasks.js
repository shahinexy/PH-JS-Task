// Count how many times a string has the letter a
const str = "I am learning web development. Now i am learning about string";
const split = str.split('')
let countA = 0;
for (let i = 0; i < split.length; i++) {
    let index = split[i]
    if(index.includes('a')){
        countA += 1;
    }
}
console.log(`This string contain a ${countA} times`);

// Count how many times a string has the letter a or A


// Check whether a string contains all the vowels a, e, i, o, u

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// Capitalize Every first Letter of each word in a String
