const data = require('./data');

const getUserById = (id, cb) => {
  setTimeout(() => {
    const user = data.users.find(user => user.id === id);
    cb(user);
  }, 150);
};

const getPostsForUser = (userId, cb) => {
  setTimeout(() => {
    const posts = data.posts.filter(post => post.createdBy === userId);
    cb(posts);
  }, 150);
};

module.exports = {
  getUserById,
  getPostsForUser,
}