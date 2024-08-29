// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

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
        name: 'motivation',
        message:"What was your motivation?",
    },
    {
        type: 'input',
        name: 'build',
        message:"Why did you build this project?",
    },
    {
        type: 'input',
        name: 'problem',
        message:"What problem does it solve?",
    },
    {
        type: 'input',  
        name: 'learn',
        message:"What did you learn?",
    },
    {
        type: 'input',
        name: 'usage',
        message:"What is the usage?",
    },
    {
        type: 'input',
        name: 'credits',
        message:"who worked on this?",
    },
    {
        type: 'input',
        name: 'information',
        message:"what is your email? and/or github username?",
    }
]

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README.md, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`File ${README.md} has been written successfully!`);
        }
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('README.md', JSON.stringify(answers, null, '\t'), (err) =>
         err ? console.log(err) : console.log('Success!')
        );
    })
 
}


// Function call to initialize app
init();
