// TODO: Include packages needed for this application
import inquirer from 'inquirer';

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
        name: 'table',
        message:"What is the table of contents?",
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
]

inquirer.prompt(questions).then(answers => {
    console.log('Your answers:');
    console.log(answers);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
