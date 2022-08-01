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
let operator = '';
// Store the second number of the mathematical operation
let secondNumber;
// used to trigger when to empty inputs on button click
let displayingAnswer = false;

/**
 * Function called on document load, manages event handlers
 */
function readyNow() {
    // console.log('Hello jQuery');

    // gets operation history on page load
    getResultsFromServer();

    // Event Handlers
    $('body').on('click', '.calculator-button', appendInput);
    $('body').on('click', '.operator-button', setFirstHalf);
    $('body').on('click', '.equals-button', processOperation);
    $('#clear-button').on('click', clearInputs)
    $('#clear-history-button').on('click', clearOperationHistory);
    $('select').on('change', returnDropdownValues);
    // for keypress - may need to change from event.which (deprecated?) to event.key
    $(document).keypress(function (event) {
        // console.log(event.which)
        switch (event.which) {
            case 48:
                $('#btnZero').trigger('click');
                break;
            case 49:
                $('#btnOne').trigger('click');
                break;
            case 50:
                $('#btnTwo').trigger('click');
                break;
            case 51:
                $('#btnThree').trigger('click');
                break;
            case 52:
                $('#btnFour').trigger('click');
                break;
            case 53:
                $('#btnFive').trigger('click');
                break;
            case 54:
                $('#btnSix').trigger('click');
                break;
            case 55:
                $('#btnSeven').trigger('click');
                break;
            case 56:
                $('#btnEight').trigger('click');
                break;
            case 57:
                $('#btnNine').trigger('click');
                break;
            case 8:
                $('#clear-button').trigger('click');
                break;
            case 43:
                $('#btnPlus').trigger('click');
                break;
            case 45:
                $('#btnMinus').trigger('click');
                break;
            case 42:
                $('#btnMultiply').trigger('click');
                break;
            case 47:
                $('#btnDivide').trigger('click');
                break;
            case 13:
                $('#btnEquals').trigger('click');
                break;
            case 61:
                $('#btnEquals').trigger('click');
                break;
            case 46:
                $('#btnDecimal').trigger('click');
                break;
        };
    });
};

/**
 * Appends the display when values are input
 * runs on number and '.' click
 */
function appendInput() {
    // trigger to allow auto clearing of display if showing results
    if (displayingAnswer === true) {
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
 * runs on operator (+, -, /, *) click
 */
function setFirstHalf() {
    firstNumber = newDisplay;
    // allow to input a negative number
    if (firstNumber === '') {
        firstNumber = 0;
        operator = $(this).data('value');
        $('.calculator-top-display').val(`${firstNumber} ${operator} `);
        $('.calculator-bottom-display').val('');
    } else {
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
 * runs on '=' click
 */
function setSecondHalf() {
    secondNumber = newDisplay;
    if (secondNumber === '') {
        secondNumber = 0;
    }
    // will do operations against '0' if no number was input first
    if (firstNumber === '') {
        firstNumber = 0;
        operator = $('.calculator-top-display').val();
        if (operator === '') {
            alert('Need to input a complete operation!');
            return;
        }
        $('.calculator-top-display').val(`${firstNumber} ${operator} ${secondNumber} = `)
    } else {
        $('.calculator-top-display').val(`${firstNumber} ${operator} ${secondNumber} = `)
    }
    // console.log('second number', secondNumber);
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
        for (let i = response.length - 1; i >= 0; i--) {
            $('#operation-history').append(`
                 <option class="dropdown-operation" data-first-number="${response[i].firstNumber}" data-operator="${response[i].operator}" data-second-number="${response[i].secondNumber}" data-result="${response[i].result}">${response[i].firstNumber} ${response[i].operator} ${response[i].secondNumber} = ${response[i].result}</option>
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

/**
 * Updates answer on display screen
 * Called in processOperation function
 */
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
 * calls updateAnswer
 */
function processOperation() {
    // console.log('In processOperation');
    setSecondHalf();
    if (operator === '') {
        return;
    }
    sendOperationToServer();
    updateAnswer();
};

/**
 * Clears all values, resets to "blank" state
 */
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

/**
 * Deletes operation history on server
 * Calls getResultsFromServer to update DOM
 * Calls clearInputs to achieve "blank" state
 */
function clearOperationHistory() {
    // console.log('In clearOperationHistory');
    $.ajax({
        method: 'DELETE',
        url: '/deleteHistory'
    }).then(function (response) {
        console.log('Deleted History')
        getResultsFromServer()
        clearInputs()
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
};

/**
 * Displays selected operation from dropdown list
 */
function returnDropdownValues() {
    // console.log('In returnDropdownValues');
    // console.log($("#operation-history option:selected").data('first-number'));
    currentDisplay = $("#operation-history option:selected").data('result');
    newDisplay = $("#operation-history option:selected").data('result');
    firstNumber = $("#operation-history option:selected").data('first-number');
    operator = $("#operation-history option:selected").data('operator');
    secondNumber = $("#operation-history option:selected").data('second-number');
    $('.calculator-bottom-display').val($("#operation-history option:selected").data('result'));
    $('.calculator-top-display').val(`${firstNumber} ${operator} ${secondNumber} = `)
    displayingAnswer = true;
};