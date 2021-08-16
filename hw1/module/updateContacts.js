const fs = require("fs/promises");

async function updateContacts (newContacts, contactsPath) {
    const contactString = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, contactString);
}

module.exports = updateContacts;