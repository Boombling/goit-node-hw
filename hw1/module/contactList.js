const fs = require('fs/promises');

async function contactList(contact) {
    const data = await fs.readFile(contact);
    const contacts = JSON.parse(data);
    return contacts
}
module.exports = contactList