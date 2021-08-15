const contactsOperations= require("./contacts");
// console.log(contacts);

(async () => {
    try {
        const contacts = await contactsOperations();
        console.log(contacts);
    }
    catch (error) {
        console.log(error.message);
    }
})();