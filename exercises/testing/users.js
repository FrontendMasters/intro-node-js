const users = new Array(20).fill(0)
.map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`
  }
})

const fixId = id => parseInt(id)

// simulate async db call with promise
const findUser = (id) => new Promise((resolve, reject) => {
  let _id = fixId(id)
  const user = users.find(user => user.id === _id)
  if (user) {
    return resolve(user)
  }
  reject(new Error(`No user with id "${_id}"`))
})

// simulate async db call with promise
const deleteUser = (id) => new Promise((resolve, reject) => {
  const _id = fixId(id)
  const i = users.findIndex(user => user.id === _id)

  if (i < 0) {
    return reject(new Error(`No user with id "${_id}"`))
  }

  users.splice(i, 1)
  resolve({id: _id})
})

module.exports = {
  findUser,
  deleteUser,
  fixId
}
