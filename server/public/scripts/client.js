// console.log('Hello World');

// Run readyNow function when document loads
$(document).ready(readyNow);

// Variable declarations

// For the input currently being displayed - updated while entering values
let currentDisplay;
// For the operator button that is clicked - should have been more descriptive in name
let buttonClicked;
// Stores the current display plus the next button clicked for continuous appendage
let newDisplay;
// Stores the first number of the mathematical operation
let firstNumber;
// Stores the operator of the mathematical operation
let operator;
// Store the second number of the mathematical operation
let secondNumber;

/**
 * Function called on document load, manages event handlers
 */
function readyNow() {
    // console.log('Hello jQuery');

    // Event Handlers
    $('body').on('click', '.calculator-button', appendInput);
    $('body').on('click', '.operator-button', setFirstHalf);
    $('body').on('click', '.equals-button', setSecondHalf);
};

/**
 * Appends the display when values are input
 */
function appendInput() {
    currentDisplay = $('.calculator-bottom-display').val();
    // console.log('this is the current display:', currentDisplay);
    buttonClicked = $(this).data('value');
    // console.log('button clicked:', buttonClicked);
    newDisplay = (currentDisplay + buttonClicked);
    // console.log('this is the new display:', newDisplay)
    $('.calculator-bottom-display').val(newDisplay);
};

/**
 * Stores the first half of the equation (first number and operator)
 */
function setFirstHalf() {
    firstNumber = newDisplay
    // console.log('This is the first number', firstNumber);
    operator = $(this).data('value');
    // console.log('This is the operator', operator);
    $('.calculator-top-display').val(`${firstNumber} ${operator} `);
    $('.calculator-bottom-display').val('');
};

/**
 * Stores second number of operation
 */
function setSecondHalf() {
    secondNumber = newDisplay;
    // console.log('second number', secondNumber);
    // let operation = {
    //     firstNumber: firstNumber,
    //     operator: operator,
    //     secondNumber: secondNumber,
    // };
    // console.log(operation);
    $('.calculator-top-display').val(`${firstNumber} ${operator} ${secondNumber} = `)
    $('.calculator-bottom-display').val('');
};