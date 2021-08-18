// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeToFile = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter your project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'give your project a description',
        },
        {
            type: 'checkbox',
            name: 'stack',
            message: 'select from these license types',
            choices: ['L1', 'L2', 'L3', 'L4'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your github username?',
        },
        {
            type: 'input',
            name: 'email address',
            message: 'what is your email address?',
        },
    ]);
};

const generateReadMe = (answers) =>
    `<!DOCTYPE md>
    # ${answers.name}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Description:
        ${answers.description}

    ## Installation
        ${answers.installation}

    ## Instructions
        ${answers.instructions}

    ## Usage Information
        ${answers.usage}

    ## Credits
        ${answers.credits}

        



    `


// TODO: Create a function to write README file










// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
