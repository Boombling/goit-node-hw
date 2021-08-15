const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

const listAll = async() => {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        // console.log(contactList);
        return contacts;
    }
    catch(error) {
        throw error;
    }
}
module.exports = listAll;