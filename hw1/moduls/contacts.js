const fs = require("fs/promises")
const path = require("path");
// const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
    try {
        const data = fs.readFile(contactsPath);
        const contactList = JSON.parse(data);
        // return contactList;
    }
    catch (error) {
        throw error
    }    
}

module.exports = {
    listContacts
}
 