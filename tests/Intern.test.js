const  Intern = require('../lib/Intern.js')

describe('Intern', () => {
    describe('getName', () => {
        it('should set a name', () => {
            const newIntern = new  Intern('Lisa', '3', 'lisa@email.com', 'University of Toledo')
            expect(newIntern.name).toEqual('Lisa')
        })
        it('should throw an error if provided no name', () => {
            const cb = () => new  Intern();
            expect(cb).toThrow();
        })
    })
    describe('getID', () => {
        it('Should set and id', () => {
            const newIntern = new Intern('Lisa', '3', 'lisa@email.com', 'University of Toledo')
            expect(newIntern.id).toEqual('3')
        })
        it('should throw an error if no number provided', () => {
            const cb = () => new  Intern();
            expect(cb).toThrow();
        })
        describe('getEmail', () => {
            it('should set an email', () => {
                const newIntern = new Intern('Lisa', '3', 'lisa@email.com', 'University of Toledo')
                expect(newIntern.email).toEqual('lisa@email.com')
            })
            describe('getSchool', () => {
                it('should set the school name', () => {
                    const newIntern = new Intern('Lisa', '3', 'lisa@email.com', 'University of Toledo')
                    expect(newIntern.school).toEqual('University of Toledo')
                })
            })
        })
        describe('getRole', () => {
            it('should return the employee role', () => {
                const newIntern = new Intern('Lisa', '3', 'lisa@email.com', 'University of Toledo')
                newEmployee.getRole()
                expect(newIntern.role).toEqual('Intern')
            })
        })
    })
})
