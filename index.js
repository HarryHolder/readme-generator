const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title? (required)",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please provide a title for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project (required)",
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log("Please enter a description of your project (required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What commands should be used to install necessary dependencies (required)",
        default: "npm i",
        validate: installGuide => {
            if (installGuide) {
                return true;
            } else {
                console.log("Please provide a response");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the user details on how to use your project (required)",
        validate: usageGuide => {
            if (usageGuide) {
                return true;
            } else {
                console.log("Please provide information for project usage");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please provide license information (required)",
        choices: ["MIT", "GPLv2", "Apache", "None"],
        default: 0,
        validate: licenseList => {
            if (licenseList) {
                return true;
            } else {
                console.log("Please select an option");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide rules for users wishing to contribute. (required)",
        validate: contributingMemebers => {
            if (contributingMemebers) {
                return true;
            } else {
                console.log("Please enter an input, if no contribution allowed state 'None'");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be used to perform tests?",
        default: "npm run test",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please provide a response");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub user name for contact info. (required)",
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log("Please enter your GitHub user name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for contact info. (required)",
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log("Please enter your email");
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); // join repo with file name
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then ((responces) => {
        console.log("Writing your readme");
        writeToFile("GenReadme.md", generateMarkdown({...responces})); 
    })
}

// function call to initialize program
init();
