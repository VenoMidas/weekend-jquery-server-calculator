console.log('Hello World');

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello jQuery');

    $('body').on('click', '.calculator-button', appendInput);
};

function appendInput() {
    let currentDisplay = $('.calculator-display').val();
    console.log('this is the current display:', currentDisplay);
    let buttonClicked = $(this).data('value');
    console.log('button clicked:', buttonClicked);
    let newDisplay = (currentDisplay + buttonClicked);
    console.log('this is the new display:', newDisplay)
    $('.calculator-display').val(newDisplay);
};

