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
            message: 'enter your project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'give your project a description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'describe how the user can install the application:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'what are the instructions for running the application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'what is the primary usage of this application?',
        },
        {
            type: 'checkbox',
            name: 'stack',
            message: 'select from these license types',
            choices: ['Apache2.0', 'Boost Software 1.0', 'BSD 3-Clause'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
        },
    ]);
};

const generateReadMe = (answers) =>
    `# ${answers.name}

    # Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Instructions](#instructions)
    - [Usage](#usage)
    - [Questions](#questions)
    - [License](#license)

    # Description
        ${answers.description}

    # Installation
        ${answers.installation}

    # Instructions
        ${answers.instructions}

    # Usage Information
        ${answers.usage}

    # Questions
       You can contact me via GitHub or email if you have any questoins:
             - GitHub: github.com/${answers.github}
             - Email Address: ${answers.email}

    # License
        The license used for this application is:
            - ${answers.stack}
    
    `;


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init =() => {
    questions()
    .then((answers) => writeToFile('README.md', generateReadMe (answers)))
    .then(() => console.log('successfully write to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
