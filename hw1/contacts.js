const path = require("path");
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, "./db/contacts.json");
const contactList = require('./module/contactList');
const updateContacts = require('./module/updateContacts');

const listContacts = async() => {
    try {
        const contacts = await contactList(contactsPath);
        console.log(contacts);
        return contacts;
    }
    catch(error) {
        throw error;
    }
}

const getContactById = async(contactId) => {
    try {
        const contacts = await contactList(contactsPath);
        const selectContact = contacts.find((item) => String(item.id) === String(contactId));
        if (!selectContact) {
            throw new Error(`Contact with id = ${contactId} not found`);
        }
        console.log(selectContact);
        return selectContact;
    }
    catch(error) {
        throw new Error(`Contact with id = ${contactId} not found`) ;
    }
}

const removeContact = async (contactId) => {
    try {
        const contacts = await contactList(contactsPath);
        const idx = contacts.findIndex((item) => String(item.id) == String(contactId));
        if (idx === -1) {
            throw new Error(`Contact with id = ${contactId} not found`);
        }
        const newContacts = contacts.filter((item) => String(item.id) !== String(contactId))
        await updateContacts(newContacts, contactsPath);
        console.log(newContacts);
        return contacts[idx];
    }
    catch(error) {
        throw error;
    }
}

const addContact = async (name, email, phone) => {
    try {
        const contacts = await contactList(contactsPath);
        const newContact = {
            id: v4(),
            name: name,
            email: email,
            phone: phone
        }
        const newContacts = { ...contacts, newContact };
        await updateContacts(newContacts, contactsPath);
        console.log(newContacts);
        return newContacts;
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
 