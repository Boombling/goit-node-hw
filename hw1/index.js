const {listContacts, getContactById, removeContact, addContact} = require("./contacts");
// console.log(contacts);

(async () => {
    try {
        const contacts = await listContacts();
        // console.log(contacts);
        const id = 3;
        // const oneContact = await getContactById(id)
        // console.log(oneContact);
    }
    catch (error) {
        console.log(error.message);
    }
})();