const { users, posts } = require("./data");

getUserById = (id, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const user = users.find(user => user.id === id);
    cb(user);
  }, 150);
};

getPostsForUser = (userId, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const _posts = posts.filter(post => post.createdBy === userId);
    cb(_posts);
  }, 150);
};

module.exports = {
  getPostsForUser,
  getUserById
};
