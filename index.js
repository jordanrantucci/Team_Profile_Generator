const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const Employee  = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')

const writeFile = util.promisify(fs.writeFile)

teamArray = []