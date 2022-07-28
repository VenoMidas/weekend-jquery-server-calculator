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

1. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
2. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
3. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
4. ![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
5. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
6. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

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

### Stretch Features

- [X] Only allow the POST call to happen if all necessary input is ready
- [ ] Allow a user to clear the history by clicking on a button, DELETE request
- [ ] Allow a user to click on an entry in the History list to re-run that calculation

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
- [X] License
- [X] Acknowledgement
- [X] Support
- [X] Others like badges