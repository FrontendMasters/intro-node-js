const { getPostsForUser, getUserById } = require("./api");

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, (posts) => {
    const postTemplates = posts.map((post) => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`;
    });
    cb(postTemplates);
  });
};

const showUserProfile = (userId, cb) => {
  getUserById(userId, (user) => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `;
    cb(user);
  });
};

module.exports = {
  showPostsForCurrentUser,
  showUserProfile,
};
