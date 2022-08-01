const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Array for operation history
const operationHistory = [];

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

// Sends the last result to the /answer route
app.get('/answer', (req, res) => {
    // console.log(operationHistory[operationHistory.length - 1].result);
    res.send({ answer: operationHistory[operationHistory.length - 1].result });
});

// Sends operationHistory array on GET request
app.get('/operation', (req, res) => {
    res.send(operationHistory);
});

// Performs calculation and stores operation in operationHistory on POST
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
    if (answer === undefined || isNaN(answer)) {
        answer = 0;
    };
    // console.log(answer);
    operation.result = answer;
    operationHistory.push(operation);
    // console.log(operationHistory);
    res.sendStatus(201);
});

// Clears operationHistory array on DELETE request
app.delete('/deleteHistory', (req, res) => {
    // console.log(operationHistory);
    operationHistory.length = 0;
    // console.log(operationHistory);
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log('Listening on port:', port);
});