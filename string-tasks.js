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
console.log('=======================================');


// Count how many times a string has the letter a or A
const str2 = "I A am A learning A web development. Now i am learning about string AA";
const split2 = str2.split('')
console.log(split2);
let countAa = 0;
for (let i = 0; i < split2.length; i++) {
    let index = split2[i]
    if(index.includes('a')){
        countAa += 1;
    }
    else if(index.includes('A')){
        countAa += 1;
    }
}
console.log(`This string contain a or A ${countAa} times`);
console.log('=======================================');


// Check whether a string contains all the vowels a, e, i, o, u
const checkVowels = "I am learning web development. Now i am learning about string";
const vowels = ['a','e','i','o','u']
let haveAllVowel = 0;
for(let vowel of vowels){
    if(checkVowels.includes(vowel)){
        haveAllVowel += 1;
    }
}
if(haveAllVowel === 5){
    console.log('This string contain all the vowel');
}
else{
    console.log('This string did not contain all the vowel');
}


console.log('=============================================');


// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// Capitalize Every first Letter of each word in a String
