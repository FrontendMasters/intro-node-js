// private is not exported, thus not accessible from app.js
const private = {}

module.exports = {
  value: 1,
  userIds: [1, 2, 3],
  action() {
    console.log('action')
  }
};