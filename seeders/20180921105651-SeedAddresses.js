'use strict';
const filesys = require("fs");
function arrayToArrayofAddresses(array) {
  var arrResult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== "") {
      let buf = array[i].split(',');
      let bufObj = {};
      bufObj.street = buf[1];
      bufObj.city = buf[2];
      bufObj.zip_code = buf[3];
      bufObj.createdAt = new Date();
      bufObj.updatedAt = new Date();
      arrResult.push(bufObj);
    }
  }
  return arrResult;
}
const addressBuffers = filesys.readFileSync("./addresses.csv", "utf8");
let addresses = addressBuffers.toString().split('\n');
let addressObjects = arrayToArrayofAddresses(addresses);
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
    return queryInterface.bulkInsert("Addresses", addressObjects, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Addresses", null, {});
  }
};
