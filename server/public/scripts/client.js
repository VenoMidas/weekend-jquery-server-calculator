console.log('Hello World');

let currentDisplay;
let buttonClicked;
let newDisplay;

let firstNumber;
let operator;

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello jQuery');

    $('body').on('click', '.calculator-button', appendInput);
    $('body').on('click', '.operator-button', setFirstHalf)
};

function appendInput() {
    currentDisplay = $('.calculator-display').val();
    console.log('this is the current display:', currentDisplay);
    buttonClicked = $(this).data('value');
    console.log('button clicked:', buttonClicked);
    newDisplay = (currentDisplay + buttonClicked);
    console.log('this is the new display:', newDisplay)
    $('.calculator-display').val(newDisplay);
};

function setFirstHalf() {
    firstNumber = newDisplay
    console.log('This is the first number', firstNumber);
    operator = $(this).data('value');
    console.log('This is the operator', operator);
    $('#middle-display').text(`${firstNumber}${operator}`);
    $('.calculator-display').val('');
};

