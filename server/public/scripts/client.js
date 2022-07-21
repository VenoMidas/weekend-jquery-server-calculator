console.log('Hello World');

let currentDisplay;
let buttonClicked;
let newDisplay;

let firstNumber;
let operator;
let secondNumber;

let operationHistory = [];

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello jQuery');

    $('body').on('click', '.calculator-button', appendInput);
    $('body').on('click', '.operator-button', setFirstHalf);
    $('body').on('click', '.equals-button', setSecondHalf);
};

function appendInput() {
    currentDisplay = $('.calculator-display').val();
    // console.log('this is the current display:', currentDisplay);
    buttonClicked = $(this).data('value');
    // console.log('button clicked:', buttonClicked);
    newDisplay = (currentDisplay + buttonClicked);
    // console.log('this is the new display:', newDisplay)
    $('.calculator-display').val(newDisplay);
};

function setFirstHalf() {
    firstNumber = newDisplay
    // console.log('This is the first number', firstNumber);
    operator = $(this).data('value');
    // console.log('This is the operator', operator);
    $('#middle-display').text(`${firstNumber}${operator}`);
    $('.calculator-display').val('');
};

function setSecondHalf() {
    secondNumber = newDisplay;
    console.log('second number', secondNumber);
    let operation = {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber,
    };
    console.log(operation);
    console.log(operationHistory);
    operationHistory.push(operation);
    console.log(operationHistory);
    $('.calculator-display').val('');
};