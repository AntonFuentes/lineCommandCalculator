// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
// For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"
// submit as github link in .txt\
// git ignore node and json files


const rs = require('readline-sync');
const operationsList = ['%', '+', '-', '/', '*'];
let firstNum = 0;
let secondNum = 0;


    const selectOperator = ()=>{
        switch (operator){
            case '+': 
                console.log("The result is: " + (Number(firstNum) + Number(secondNum)));
                break;
            case '-': 
                console.log("The result is: " + (Number(firstNum) - Number(secondNum)));
                break;
            case '/':
                if(secondNum !== '0'){
                    console.log("The result is: " + (Number(firstNum) / Number(secondNum)))}
                    else {console.log("You cannot divide by 0, it will return undefined.")};
                break;
            case '*':
                console.log("The result is: " + (Number(firstNum) * Number(secondNum)));
                break;
            case '%':
                if(secondNum !== '0'){
                    console.log("The result is: " + (Number(firstNum) % Number(secondNum)))}
                    else {console.log("You cannot modulo by 0, it will return NaN.");
                        console.log("Thank for using us as your calculator provider.");
                        };
                break;
            default: console.log('Invalid operator, Thank for using us as your calculator provider.')
        }
    }

const getOperator = ()=> {
    operator = rs.question('Which operator would you like to preform? for addition use +, subtraction use -, division use /, multiplication use *, or modulo use %: '
    , {limit: [operationsList],
    limitMessage: "please select $<operationList>"});
        firstNum = rs.question('Please enter the first number between 0 and 999: ',
            {limit: /^[0-999]$/, limitMessage: "This is not a number."});
        secondNum = rs.question("Please enter the second number between 0 and 999. Note: you can't divide/modulo by 0: ",
            {limit: /^[0-999]$/, limitMessage: "This is not a number."});
        selectOperator();
        console.log('Thank for using us as your calculator provider.');
        return;
    };



getOperator();
