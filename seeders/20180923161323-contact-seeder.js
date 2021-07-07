'use strict';
const fs = require('fs')

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
   let contacts = fs.readFileSync('./contacts.csv').toString().split('\n')
   let inputContact = []
   for(let i = 0; i < contacts.length; i++){
      let contact = contacts[i].split(',')
      let obj = { name: contact[1], 
                  email: contact[2], 
                  phone: contact[3], 
                  createdAt : new Date(),
                  updatedAt : new Date() }
      inputContact.push(obj) 
   }
   return queryInterface.bulkInsert('Contacts', inputContact)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
