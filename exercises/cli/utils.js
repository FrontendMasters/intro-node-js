const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs

//onst contactsLocation = 'contacts.json'

 const contactsLocation = path.join(__dirname, 'contacts.json')


/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation).toString()

  return JSON.parse(contacts)
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const stringContacts = JSON.stringify(contacts)
  return fs.writeFileSync(contactsLocation, stringContacts)
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

