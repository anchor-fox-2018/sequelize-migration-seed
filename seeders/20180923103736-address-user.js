'use strict';
const fs = require('fs')
class Address{
  constructor(id,street,city,zip_code){
    this.id = id
    this.street = street
    this.city = city
    this.zip_code = zip_code
    this.createdAt = new Date
    this.updatedAt = new Date
  }
}
let arr = fs.readFileSync('../addresses.csv','utf8').split('\n')
//let arr = data.split('\n')
    var arrObj = []
    
    for(let i = 0;i < arr.length-1;i++){
      let isi = arr[i].split(',');
      let hasil = new Address(isi[0],isi[1],isi[2],isi[3])
      arrObj.push(hasil);
    }
    console.log(arrObj)
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
   return queryInterface.bulkInsert('Addresses',arrObj, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null, {});
  }
};
