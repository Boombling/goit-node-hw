const {listContacts, getContactById, removeContact, addContact} = require("./contacts");

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
      break;

      case 'get':
          if (argv.id) {
              getContactById(id)
          }
          else {
              console.log(`Contact with id = ${id} not found`);
          }
      break;

      case 'add':
          if ((argv.name, argv.email, argv.phone)) {
              addContact(name, email, phone)
          }
          else {
              console.log('Contact is not correct');
          }
      break;

      case 'remove':
          if (argv.id) {
              removeContact(id)
          }
          else {
              console.log(`Contact with id = ${id} not found`);
          }
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

//  "9": {
//     "id": 10,
//     "name": "Alec Howard",
//     "email": "Donec.elementum@scelerisquescelerisquedui.net",
//     "phone": "(748) 206-2688"
//   }