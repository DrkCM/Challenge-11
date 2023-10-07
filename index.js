const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // about name
{
    type: "input",
    name: "github",
    message: "What is your Github username?"
},
    // about email
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
    // about project's name
{
    type: "input",
    name: "title",
    message: "What is your project's title name?"
},
    // about description
{
    type: "input",
    name: "description",
    message: "Short description of your project please"
},
    // about license
{
    type: "list",
    name: "license",
    message: "What kind of license",
    choices: ["MIT", "APACHE_2.0", "GPL", "None"]
},
    // about installation
{
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies",
    default: "npm i"
},
    // about test
{
    type: "input",
    name: "test",
    message: "What command should be run to run test",
    default: "npm test"
},
    // about usage
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
},
    // about contributing
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile("README.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
