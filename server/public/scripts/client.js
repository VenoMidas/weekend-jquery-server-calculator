// console.log('Hello World');

// Run readyNow function when document loads
$(document).ready(readyNow);

// Variable declarations
// For the input currently being displayed - updated while entering values
let currentDisplay;
// For the operator button that is clicked - should have been more descriptive in name
let buttonClicked;
// Stores the current display plus the next button clicked for continuous appendage
let newDisplay = '';
// Stores the first number of the mathematical operation
let firstNumber = '';
// Stores the operator of the mathematical operation
let operator;
// Store the second number of the mathematical operation
let secondNumber;
// used to trigger when to empty inputs on button click
let displayingAnswer = false;

/**
 * Function called on document load, manages event handlers
 */
function readyNow() {
    // console.log('Hello jQuery');

    getResultsFromServer();

    // Event Handlers
    $('body').on('click', '.calculator-button', appendInput);
    $('body').on('click', '.operator-button', setFirstHalf);
    $('body').on('click', '.equals-button', processOperation);
    $('#clear-button').on('click', clearInputs)
};

/**
 * Appends the display when values are input
 */
function appendInput() {
    if (displayingAnswer === true){
        $('.calculator-bottom-display').val('');
        $('.calculator-top-display').val('');
    }
    currentDisplay = $('.calculator-bottom-display').val();
    // console.log('this is the current display:', currentDisplay);
    buttonClicked = $(this).data('value');
    // console.log('button clicked:', buttonClicked);
    newDisplay = (currentDisplay + buttonClicked);
    // console.log('this is the new display:', newDisplay)
    $('.calculator-bottom-display').val(newDisplay);
    displayingAnswer = false;
};

/**
 * Stores the first half of the equation (first number and operator)
 */
function setFirstHalf() {
    if (firstNumber === '' && $(this).data('value') === '-'){
        firstNumber = '-';
        $('.calculator-bottom-display').val(firstNumber);
    } else {
        firstNumber = newDisplay;
        // console.log('This is the first number', firstNumber);
        operator = $(this).data('value');
        // console.log('This is the operator', operator);
        $('.calculator-top-display').val(`${firstNumber} ${operator} `);
        $('.calculator-bottom-display').val('');
    }
    displayingAnswer = false;
};

/**
 * Stores second number of operation
 */
function setSecondHalf() {
    if(firstNumber === ''){
        firstNumber = 0;
        operator = $('.calculator-top-display').val();
        secondNumber = newDisplay;
    } else {
        secondNumber = newDisplay;
    }
    // console.log('second number', secondNumber);
    // let operation = {
    //     firstNumber: firstNumber,
    //     operator: operator,
    //     secondNumber: secondNumber,
    // };
    // console.log(operation);
    $('.calculator-top-display').val(`${firstNumber} ${operator} ${secondNumber} = `)
    // $('.calculator-bottom-display').val('');
    displayingAnswer = false;
};

/**
 * AJAX for getting results from server
 * Appends response to the DOM
 * Is called on page load and in .then of sendOperationToServer
 */
function getResultsFromServer() {
    // console.log('In getResultsFromServer');
    $.ajax({
        type: 'GET',
        url: '/operation'
    }).then(function (response) {
        $('#operation-history').empty();
        for (let operation of response) {
            $('#operation-history').append(`
                <li>${operation.firstNumber} ${operation.operator} ${operation.secondNumber} = ${operation.result}</li>
            `);
        };
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

/**
 * AJAX for sending info to server
 * Calls getResultsFromServer on response
 */
function sendOperationToServer() {
    // console.log('In sendOperationToServer')
    $.ajax({
        type: 'POST',
        url: '/operation',
        data: {
            firstNumber: firstNumber,
            operator: operator,
            secondNumber: secondNumber
        }
    }).then(function (response) {
        getResultsFromServer();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

function updateAnswer() {
    // console.log('In updateAnswer');
    $.ajax({
        type: 'GET',
        url: '/answer'
    }).then(function (response) {
        // console.log(response);
        // firstNumber = response.answer;
        newDisplay = response.answer;
        $('.calculator-bottom-display').val(newDisplay);
        displayingAnswer = true;
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

/**
 * Runs on click of "=" button
 * calls setSecondHalf
 * calls sendOperationToServer
 */
function processOperation() {
    // console.log('In processOperation');
    setSecondHalf();
    sendOperationToServer();
    updateAnswer();
};

function clearInputs() {
    // console.log('in clearInputs')
    $('.calculator-top-display').val('');
    $('.calculator-bottom-display').val('');
    currentDisplay = '';
    buttonClicked = '';
    newDisplay = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayingAnswer = false;
};