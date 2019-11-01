const db = require('../../db/connection.js');

const deleteZipCode = (dbTbl, zipCode) => {
  db(dbTbl)
    .where('zip_code', zipCode)
    .del()
    .then(res => {
      if(res > 0) {
        console.log(`${zipCode} deleted from ${dbTbl}`);
      }
    })
    .catch(err => console.error('error:', err))
}

module.exports = deleteZipCode;
