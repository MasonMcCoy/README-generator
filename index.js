// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mrkdwn = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Input installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Create contribution guidelines.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Describe test instructions.',
        name: 'description'
    },
    {
        type: 'checkbox',
        message: 'Chose a license(s) for your project.',
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => 
        console.log(response)
    )
}

// Function call to initialize app
init();