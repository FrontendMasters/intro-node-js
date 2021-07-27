// write some tests
const {fixId} = require('./users')
describe('users', () => {
    test('fixId', () => {
        expect(fixId('200')).toBe(200)
    }) 
})
