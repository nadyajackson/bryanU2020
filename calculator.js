var readlineSync = require('readline-sync');
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ");

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function subTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function mulTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function calculator(firstNumber, secondNumber, enteredOperator){
    if (enteredOperator == "add"){
       console.log("Addition of number-1: " + firstNumber + " and number-2: " + secondNumber + " results in: " + addTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "sub"){
        console.log("Subtraction of number-1: " + firstNumber + "and number-2: " + secondNumber + " results in: " + subTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "mul"){
        console.log("Multiplication of number-1: " + firstNumber +"and number-2: " + secondNumber + " results in: " + mulTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "div"){
        console.log("Division of number-1: " + firstNumber + " and number-2: " +secondNumber + " results in: " + divTwoNumbers(firstNumber, secondNumber));
    }
    else {
        console.log("The entered operator is not recognized. Please enter: add, sub, mul, or div");
    }
}

calculator(firstNumber, secondNumber, enteredOperator);