const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, phoneNumber, role){
        super(name, id, email, role)
        this.phoneNumber = phoneNumber
    }
    getNumber(){
        return this.phoneNumber
    }
    getRole(){
        return this.role = "Manager"
    }
}
module.exports = Manager 
//exports the module of Manager