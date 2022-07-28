<!-- Badges -->
![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

# Server-Side Calculator

## Description

_Duration: 2 Weeks_

A calculator that takes input from the client, performs the calculations on the server side, and displays the results on the client.

Link to deployed app goes here.

## Screenshot

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. run `npm install express` in your terminal
2. run `npm start` in your terminal. (Default port is 5000, if port is in use modify `server.js` port variable.)
3. Navigate to `localhost:5000` in browser (if port was modified, use redifined port number)

## Built With

1. HTML
2. CSS
3. JS
4. jQuery
5. Node.js
6. Express.js

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and members of the Phrygian cohort who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [schuma1022@gmail.com](mailto:schuma1022@gmail.com)

## Project Checklist

### Required Features

- [X] The logic for the calculator **must** be implemented on the server
- [X] Create a user interface where the user can input two values and the select type of mathematical operation
- [X] When the submit (`=` button) is clicked do the following
- [X] Capture this input 
- [X] Bundle it up in an object
- [X] Send this object to the server via a POST
- [X] There should also be a 'C' button that will clear the user input fields
- [X] Build out the server-side logic to compute the numbers as appropriate (Addition, Subtraction, Multiplication, Division)
- [X] Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.
- [X] Keep a historical record of all math operations and solutions on the server.
- [X] Display a list of all previous calculations on the page when it loads using a GET request.
- [X] Update the list when a new calculation is made.

### Setup

- [X] Create .gitignore
- [X] Create file structure with files
- [X] Link and source public files
- [X] Complete server setup

### Functionality

- [X] Create HTML calculator layout with basic styles
- [X] Button clicks display on screen
- [X] Input number and operator stored when clicking operator button
- [X] Clear values 
- [X] Second input number is stored when = operator is clicked
- [X] POST operation object to server on = click
- [X] Perform calculation on sever
- [X] GET result and operation list and append to DOM
- [X] Add functionality for "Clear" button

### README updates
- [X] Project Name
- [X] Project Description
- [ ] Link to deployed app
- [ ] Screenshot
- [X] Prerequisites
- [X] Installation - run npm install express
- [X] Built With
- [ ] License
- [X] Acknowledgement
- [X] Support
- [ ] Others like badges
