const sentence = 'I am learning web development.';
let revers = '';
for(let letter of sentence){
    revers = letter + revers;
}
console.log(revers);

console.log( '==================');

let rev = '';
for(let i =0; i<sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

console.log('===============');
