const { findUser, deleteUser, fixId } = require('./users')
// write some tests
describe('users', () => {
  describe('fixId', () => {
    test('convert param id to db id', () => {
      expect(fixId('200')).toBe(200)
    })
  })
  describe('findUser', () => {
    test('finds user by id if user is there', async () => {
      const user = await findUser(1)
      expect(user.id).toBe(1)
    })
  })
  describe('deletUser', () => {
    test('deletes user with id if user is there', async () => {
      expect.assertions(2)

      const user = await findUser(1)
      const deletedUser = await deleteUser(user.id)
      expect(deletedUser.id).toBe(1)
      try {
        await findUser(1)
      } catch(e) {
        expect(e).toBeTruthy()
      }
    })
  })
})
