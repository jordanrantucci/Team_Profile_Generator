const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email, role) //super is used to call functions on the objects parent 
        this.github = github
    } 
    getGithub(){
        return this.github
    }
    getRole(){
        return this.role = "Engineer"
    }
}
module.exports = Engineer