const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Employee  = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const ExpandPrompt = require('inquirer/lib/prompts/expand')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

teamArray = []

const validate = {
    name: input => input !== '' ? true: 'Please enter a name.',
    id: input => isNaN(input) ? 'ID must be numerical' : true,
    //email: input => input == /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ? true : 'Please enter a valid email address.'
}

// writefile using inquirer prompts to user about each employee
const promptManager = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Team Manager?',
            name: 'name',
            validate:validate.name
        },
        {
            type: 'input',
            message: 'What is the ID Number?',
            name: 'id',
            validate:validate.id
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'email',
            //validate:validate.email
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
        const newManager = new Manager(res.name, res.id, res.email, res.phoneNumber)
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
            name: 'name',
            validate: validate.name
        },
        {
            type: 'input',
            message: 'What is the ID Number?',
            name: 'id',
            validate: validate.id
        },
        {
            type: 'input',
            message: "What is the Engineer's email?",
            name: 'email',
            //validate: validate.email
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub Username?",
            name: 'github',
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
        const newEngineer = new Engineer(res.name, res.id, res.email, res.github)
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
// prompt of questions for the Intern
const promptIntern = () => 
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'name',
            validate: validate.name
        },
        {
            type: 'input',
            message: 'What is the ID Number for the intern?',
            name: 'id',
            validate: validate.id
        },
        {
            type: 'input',
            message: "What is the Intern's email?",
            name: 'email',
            //validate: validate.email
        },
        {
            type: 'input',
            message: "What school does the intern attend?",
            name: 'school',
            validate: validate.name
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'My team is complete'],
            name: 'teamMember'
        }
    ])
    .then(function(res){
        const newIntern = new Intern(res.name, res.id, res.email, res.school)
        teamArray.push(newIntern)
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

    const getHTMLModule = (file) => {
        return readFile(file, 'utf8')
    }

    async function endPrompt() {
        let Form = {
            Main: await getHTMLModule('./src/main.html'),
            Manager: await getHTMLModule('./src/manager.html'),
            Engineer: await getHTMLModule('./src/engineer.html'),
            Intern: await getHTMLModule('./src/intern.html')
        }
    
        let teamHTML = ''
        // write a for of loop to replace the prompt responses into the html file
        for (const employee of teamArray) {
            let html = Form[employee.constructor.name]
            .replace(/{% name %}/gi, employee.name) //i is immaterial and g is a modifier is not there in regex will return first match
            .replace(/{% id %}/gi, employee.id)
            .replace(/{% email %}/gi, employee.email)
            switch(employee.constructor.name) {
                case 'Manager':
                    html = html.replace(/{% phoneNumber %}/gi, employee.phoneNumber)
                    break
                case 'Engineer':
                    html = html.replace(/{% github %}/gi, employee.github)
                    break
                case 'Intern':
                    html = html.replace(/{% school %}/gi, employee.school)
                break
        }
        teamHTML += html
    }
    async function write(html) {
        const file = `team.html`
        const dir = './dist'
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        await writeFile(`${dir}/${file}`, html)
        .then(() => console.log('Success!'))
        .catch((err) => console.error(err))
        return
    }

    const finalHTML = Form['Main'].replace(/{% employees %}/gi, teamHTML)
    write(finalHTML)
}

promptManager()