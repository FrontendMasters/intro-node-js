window.App = window.App || {}

window.App.getUserById = (id, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const user = window.App.users.find(user => user.id === id)
    cb(user)
  }, 150)
}

window.App.getPostsForUser = (userId, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const posts = window.App.posts.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}
