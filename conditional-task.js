/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 400;
if(burgerPrice >= 500){
    console.log('you got a free coke');
}
else{
    console.log('You have to pay 30tk for coke');
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 75;
const height = 1.79;
const bmi = weight / height**2

if(bmi < 18.5){
    console.log('You are underweight');
}
else if ( bmi >= 18.5 && bmi <= 24.9){
    console.log('You are normal');
}
else if( bmi >= 25 && bmi <= 29.9){
    console.log('You are overweight');
}
else{
    console.log('You are obese');
}


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score = 85;
if(score >=90 && score <= 100){
    console.log('You got A');
}
else if(score >=80 && score <= 89){
    console.log('You got B');
}
else if(score >=70 && score <= 79){
    console.log('You got C');
}
else if(score >=60 && score <= 69){
    console.log('You got D');
}
else if(score >=0 && score <= 59){
    console.log('You got F');
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 80;
const myFriendScore = 60;
if(myScore >= 80){
    if(myFriendScore >= 80){
        console.log('Then go fore a lunch');
    }
    else if (myFriendScore >= 60 && myFriendScore <80){
        console.log('Good luck next time');
    }
    else if (myFriendScore >= 40 && myFriendScore <60){
        console.log('Keep your friends message unseen');
    }
    else if (myFriendScore < 40){
        console.log('Block your friend');
    }
}
else{
    console.log('Going to home and sleep and act sad');
}




/***
 * 

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 30;
const num2 = 20;
const tearnaryResult = num1 > num2 ? num1 *2 : num1 + num2;
console.log(tearnaryResult);



/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 20;
const student = false;
const  price = 800;
if(age < 10){
    console.log('Free Calculator');
}
else if(student){
    // 50% discount 
    const discount = price * (50/100);
    const payAmount = price - discount;
    console.log('You have to pay:', payAmount);
}
else if( age >= 60){
    // 15% discount 
    const discount = price * (15/100);
    const payAmount = price - discount;
    console.log('You have to pay:', payAmount);
}
else{
    console.log('You have to pay 800tk');
}