const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Employee  = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')

const writeFile = util.promisify(fs.writeFile)

teamArray = []

// writefile using inquirer prompts to user about each employee
const promptManager = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Team Manager?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the ID Number?',
            name: 'ID'
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "What is the Manager's Office Phone Number?",
            name: 'phoneNumber'
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'My team is complete' ],
            name: 'teamMember'
        }
    ])