const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school, role){
        super(name, id, email, role)
        this.school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return this.role = "intern"
    }
}
module.exports = Intern