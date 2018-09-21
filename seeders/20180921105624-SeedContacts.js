'use strict';
const filesys = require("fs");
function arrayToArrayofContacts(array) {
  var arrResult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== "") {
      let buf = array[i].split(',');
      let bufObj = {};
      bufObj.name = buf[1];
      bufObj.email = buf[2];
      bufObj.phone = buf[3];
      bufObj.createdAt = new Date();
      bufObj.updatedAt = new Date();
      arrResult.push(bufObj);
    }
  }
  return arrResult;
}
const contactBuffers = filesys.readFileSync("./contacts.csv", "utf8");
let contacts = contactBuffers.toString().split('\n');
let contactObjects = arrayToArrayofContacts(contacts);
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Contacts", contactObjects, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Contacts", null, {});
  }
};
