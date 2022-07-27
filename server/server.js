const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Array for operation history
const operationHistory = [];

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));

app.post('/operation', (req, res) => {
    // console.log(req.body);
    const operation = req.body;
    let answer; 
    switch (operation.operator) {
        case '+':
            answer = parseFloat(operation.firstNumber) + parseFloat(operation.secondNumber);
            break;
        case '-':
            answer = (operation.firstNumber - operation.secondNumber);
            break;
        case '/':
            answer = (operation.firstNumber / operation.secondNumber);
            break;
        case '*':
            answer = (operation.firstNumber * operation.secondNumber);
            break;
    };
    // console.log(answer);
    operation.result = answer;
    operationHistory.push(operation);
    console.log(operationHistory);
});














app.listen(port, () => {
    console.log('Listening on port:', port);
});