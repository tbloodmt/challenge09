// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const path = require("path")
// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections
//  entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type:"input", 
        name:"title",
        message:"what's the title of your application?"
    },
    {
        type:"input",
        name:"description",
        message:"what's the description of your application?"
    },
    {
        type:"input",
        name:"installation",
        message:"do you need to install anything?"
    },
    {
        type:"input",
        name:"usage",
        message:"how is this app used?"
    },
    {
        type:"input",
        name:"contributing",
        message:"did anyone else contribute?"
    },
    {
        type:"input",
        name:"test",
        message:"any testing framework?"
    },
    {
        type:"input",
        name:"GitHub",
        message:"enter your GitHub username."
    },
    {
        type:"input",
        name:"email",
        message:"enter your email address."
    },
    {
        type:"list",
        name:"license",
        message:"enter your email address.",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(fileName),data,(err)=>{
        err?console.error(err):console.log("readme generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("readme.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
