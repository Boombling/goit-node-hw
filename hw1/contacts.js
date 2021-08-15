const fs = require("fs/promises")
const path = require("path");
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, "./db/contacts.json");
const contactList = require('./module/contactList');

const listContacts = async() => {
    try {
        const contacts = await contactList(contactsPath);
        // console.log(contacts);
        return contacts;
    }
    catch(error) {
        throw error;
    }
}

const getContactById = async (contactId) => {
    try {
        const contacts = await contactList(contactsPath);
        const selectContact = contacts.find((item) => item.id === contactId);
        if (!selectContact) {
            throw new Error(`Contact with id= ${contactId} not found`);
        }
        return selectContact;

    }
    catch (error) {
        throw error
    }
}
const removeContact = async (contactId) => {
    try {
        
    }
    catch (error) {
        throw error
    }
}
const addContact = async (name, email, phone) => {
    try {
        
    }
    catch (error) {
        throw error
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
 