const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Array for operation history
const operationHistory = [];

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));
















app.listen(port, () => {
    console.log('Listening on port:', port);
});