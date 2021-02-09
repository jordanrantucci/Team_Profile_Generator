const Employee = require('../lib/Employee')

    describe('Employee', () => {
        describe('getName', () => {
            it('Should set a name', () => {
                const newEmployee = new Employee('John', '1', 'John@email.com')
                expect(newEmployee.name).toEqual('John')
            })
            it('should throw an error if provided no name', () => {
                const cb = () => new Employee();
                expect(cb).toThrow();
            })
        })
    })
    describe('getID', () => {
        it('Should set and id', () => {
            const newEmployee = new Employee('John', '1', 'John@email.com')
            expect(newEmployee.id).toEqual('1')
        })
        it ('should throw an error if no number provided', () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        })
    describe('getEmail', () => {
        it('should set an email', () => {
            const newEmployee = new Employee('John', '1', 'John@email.com')
            expect(newEmployee.email).toEqual('John@email.com')
        })
    })
    describe('getRole', () => {
        it('should return the employee role', () => {
            const newEmployee = new Employee('John', '1', 'John@email.com')
            newEmployee.getRole()
            expect(newEmployee.role).toEqual('Employee')
        })
    })
})