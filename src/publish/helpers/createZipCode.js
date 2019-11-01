const db = require('../../db/connection.js');

const createZipCode = (dbTbl, zipCode) => {
  db(dbTbl)
    .insert({ zip_code: zipCode })
    .then(() => console.log(`${zipCode} added to ${dbTbl}`))
    .catch(err => console.error('error:', err))
}

module.exports = createZipCode;
