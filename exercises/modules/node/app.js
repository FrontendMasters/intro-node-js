const api = require('./api')

const showPostsForCurrentUser = (userId, cb) => {
  api.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  api.getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(profile)
  })
}

module.exports = {
  showPostsForCurrentUser,
  showUserProfile
}


