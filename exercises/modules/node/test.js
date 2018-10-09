const data = require('./data')
const api = require('./api')
const app = require('./app')

describe('data', () => {
  test('users',  () => {
    expect(data.users).toHaveLength(1)
  })
  test('posts', () => {
    expect(data.posts).toHaveLength(3)
  })
})

describe('api', () => {
  test('getUserById', done => {
    expect.assertions(1)
    api.getUserById(1, user => {
      expect(user.id).toBe(1)
      done()
    })
  })
  test('getPostsForUser', done => {
    api.getPostsForUser(1, posts => {
      expect(posts).toHaveLength(3)
      posts.forEach(post => {
        expect(post.createdBy).toBe(1)
      })
      done()
    })
  })
})

describe('app', () => {
  test('showPostsForCurrentUser', done => {
    app.showPostsForCurrentUser(1, posts => {
      expect(posts).toHaveLength(3)
      done()
    })
  })

  test('showUserProfile', done => {
    app.showUserProfile(1, profile => {
      expect(profile).toBeTruthy()
      done()
    })
  })
})
