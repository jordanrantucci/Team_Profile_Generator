const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Employee  = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const ExpandPrompt = require('inquirer/lib/prompts/expand')

const writeFile = util.promisify(fs.writeFile)

teamArray = []

const validate = {
    name: input => input !== '' ? true: 'Please enter a name.',
    id: input => isNaN(input) ? 'ID must be numerical' : true,
    email: input => input == /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ? true : 'Please enter a valid email address.'
}

// writefile using inquirer prompts to user about each employee
const promptManager = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Team Manager?',
            name: 'managerName',
            validate:validate.name
        },
        {
            type: 'input',
            message: 'What is the ID Number?',
            name: 'managerID',
            validate:validate.id
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'managerEmail',
            validate:validate.email
        },
        {
            type: 'input',
            message: "What is the Manager's Office Phone Number?",
            name: 'phoneNumber',
            validate:validate.id
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'My team is complete' ],
            name: 'teamMember'
        }
    ])
    
    //taking the responses and adding manager to the array and prompting questions for additional team members
    .then(function(res){
        const newManager = new Manager(res.managerName, res.managerID, res.managerEmail, res.phoneNumber)
        teamArray.push(newManager)
        switch(res.teamMember){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'My team is complete':
                endPrompt()
        }
    })
    
    //creating question prompt for the engineer
const promptEngineer = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Engineer?',
            name: 'engineerName',
            validate: validate.name
        },
        {
            type: 'input',
            message: 'What is the ID Number?',
            name: 'engineerID',
            validate: validate.id
        },
        {
            type: 'input',
            message: "What is the Engineer's email?",
            name: 'engineerEmail',
            validate: validate.email
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub Username?",
            name: 'engineerGitHub',
            validate: validate.name
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'My team is complete'],
            name: 'teamMember'
        }
    ])

    // taking the engineer response and adding it to the team member array
    .then(function(res){
        const newEngineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGitHub)
        teamArray.push(newEngineer)
        switch(res.teamMember){
            case 'Engineer':
                promptEngineer()
                break
            case 'Intern':
                promptIntern()
                break
            case 'My team is complete':
                endPrompt()
        }
    })