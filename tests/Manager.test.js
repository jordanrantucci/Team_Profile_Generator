const Manager = require('../lib/Manager.js')

describe('Manager', () => {
    describe('getName', () => {
        it('should set a name', () => {
            const newManager = new Manager('Diane', '4', 'Diane@email.com', '555-123-4567')
            expect(newManager.name).toEqual('Diane')
        })
        // it('should throw an error if provided no name', () => {
        //     const cb = () => new Manager();
        //     expect(cb).toThrow();
        // })
    })
    describe('getID', () => {
        it('Should set and id', () => {
            const newManager = new Manager('Diane', '4', 'Diane@email.com', '555-123-4567')
            expect(newManager.id).toEqual('4')
        })
        // it('should throw an error if no number provided', () => {
        //     const cb = () => new Manager();
        //     expect(cb).toThrow();
        // })
        describe('getEmail', () => {
            it('should set an email', () => {
                const newManager = new Manager('Diane', '4', 'Diane@email.com', '555-123-4567')
                expect(newManager.email).toEqual('Diane@email.com')
            })
            describe('number', () => {
                it('should set the phone number', () => {
                    const newManager = new Manager('Diane', '4', 'Diane@email.com', '555-123-4567')
                    expect(newManager.number).toEqual('555-123-4567')
                })
            })
        })
        describe('getRole', () => {
            it('should return the employee role', () => {
                const newManager = new Manager('Diane', '3', 'Diane@email.com', '555-123-4567')
                newManager.getRole()
                expect(newManager.role).toEqual('Manager')
            })
        })
    })
})