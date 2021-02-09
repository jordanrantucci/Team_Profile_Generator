const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, school, role){
        super(name, id, email, role)
        this.number = number
    }
    getNumber(){
        return this.number
    }
    getRole(){
        return this.role = "Manager"
    }
}
module.exports = Manager 
//exports the module of Manager