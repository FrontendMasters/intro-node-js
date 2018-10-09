const fs = require('fs')
const path = require('path')

const contactsLocation = path.join(__dirname, 'contacts.json')
const getContacts = () => JSON.parse(fs.readFileSync(contactsLocation))
const saveContacts = (contacts) => fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2))

module.exports = {contactsLocation, getContacts, saveContacts}

