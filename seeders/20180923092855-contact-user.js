'use strict';
const fs = require('fs');
// function readFileContact(){
//   return new Promise(function(resolve,reject){
//     fs.readFile('../contacts.csv','utf8',function(err,data){
//       if(err){
//         reject(err)
//       }else{
//         resolve(data)
//       }
//     })
//   })
  
// }
// readFileContact()
//   .then(function(data){
//     let arr = data.split('\n')
//     var arrObj = []
    
//     for(let i = 0;i < arr.length-1;i++){
//       let isi = arr[i].split(',');
//       let hasil = new Contacts(isi[0],isi[1],isi[2],isi[3])
//       arrObj.push(hasil);
//     }
//     console.log(arrObj)
//   })
//   .catch(function(err){
//     console.log('ERR:')
//   })
class Contacts{
  constructor(id,name,email,phone){
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.createdAt = new Date
    this.updatedAt = new Date
  }
}
let arr = fs.readFileSync('./contacts.csv','utf8').split('\n')
//let arr = data.split('\n')
    var arrObj = []
    
    for(let i = 0;i < arr.length-1;i++){
      let isi = arr[i].split(',');
      let hasil = new Contacts(isi[0],isi[1],isi[2],isi[3])
      arrObj.push(hasil);
    }
//console.log(arrObj)

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Contacts',arrObj, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
