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
    let addresses = fs.readFileSync('./addresses.csv').toString().split('\n')
    let inputAddress = []
    for(let i = 0; i < addresses.length; i++){
      let address = addresses[i].split(',')
      let obj = { street: address[1], 
                  city: address[2], 
                  zip_code: address[3], 
                  createdAt : new Date(),
                  updatedAt : new Date()}
      inputAddress.push(obj)
    }
    return queryInterface.bulkInsert('Addresses', inputAddress)
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
