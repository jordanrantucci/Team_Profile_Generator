const Engineer = require('../lib/Engineer.js')

describe('Engineer', () => {
    describe('getName', () => {
        it('should set a name', () => {
            const newEngineer = new Engineer('Joe', '2', 'joe@email.com', 'joeengineer')
            expect(newEngineer.name).toEqual('Joe')
        })
        // it('should throw an error if provided no name', () => {
        //     const cb = () => new Engineer();
        //     expect(cb).toThrow();
        // })
    })
    describe('getID', () => {
        it('Should set and id', () => {
            const newEngineer = new Engineer('Joe', '2', 'joe@email.com', 'joeengineer')
            expect(newEngineer.id).toEqual('2')
        })
        // it('should throw an error if no number provided', () => {
        //     const cb = () => new Engineer();
        //     expect(cb).toThrow();
        // })
        describe('getEmail', () => {
            it('should set an email', () => {
                const newEngineer = new Engineer('Joe', '2', 'joe@email.com', 'joeengineer')
                expect(newEngineer.email).toEqual('joe@email.com')
            })
        describe('getGithub', () => {
            it('should set the GitHub username', () => {
                const newEngineer = new Engineer('Joe', '2', 'joe@email.com', 'joeengineer')
                expect(newEngineer.github).toEqual('joeengineer')
            })
        })
        })
        describe('getRole', () => {
            it('should return the employee role', () => {
                const newEngineer = new Engineer('Joe', '2', 'joe@email.com', 'joeengineer')
                newEngineer.getRole()
                expect(newEngineer.role).toEqual('Engineer')
            })
        })
    })
})
