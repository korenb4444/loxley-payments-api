const db = require('../db');

async function searchByName(name) {
  return db.query(`SELECT * FROM merchants WHERE name ILIKE '%${name}%'`);
}

async function searchByPostcode(postcode) {
  return db.query(`SELECT * FROM merchants WHERE postcode = '${postcode}'`);
}

module.exports = { searchByName, searchByPostcode };
