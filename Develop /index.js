// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message:"What is your project title?",
    },
    {
        type: 'input',
        name: 'description',
        message:"Can you describe it?",
    },
    {
        type: 'input',  
        name: 'installation',
        message:"how do you install this?",
    },
    {
        type: 'input',
        name: 'usage',
        message:"What is the usage?",
    },
    {
        type: 'input',
        name: 'contributors',
        message:"who worked on this?",
    },
    {
        type: 'input',
        name: 'tests',
        message:"what tests did you run?",
    },
    {
        type: 'list',
        name: 'license',
        message:"What license do you want to use?",
        choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Boost', 'Unlicense', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message:"what is your email??",
    },
    {
        type: 'input',
        name: 'github',
        message:"what is your github username?",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, content, license) {
    fs.writeFile(fileName, content, license, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`File README.md has been written successfully!`);
        }
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let redMeText = generateMarkdown(answers, answers.license);
        return redMeText
    }).then((redMeText) => {
        writeToFile('README.md', redMeText);
    })
 
}


// Function call to initialize app
init();
