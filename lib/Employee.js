class Employee {
    //the constructor gets called when you declare an object using the new keyword, the purpose is to create an objext and set values if there are an object properties present
    constructor(name, id, email, role){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    } 
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role = 'Employee'
    }

}
module.exports = Employee