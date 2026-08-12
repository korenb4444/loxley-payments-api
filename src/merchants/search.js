const db = require('../db');

async function searchByName(name) {
  return db.query(`SELECT * FROM merchants WHERE name ILIKE '%${name}%'`);
}

async function searchByPostcode(postcode) {
  return db.query(`SELECT * FROM merchants WHERE postcode = '${postcode}'`);
}

async function searchByCategory(mcc) {
  return db.query("SELECT * FROM merchants WHERE mcc = '" + mcc + "'");
}

module.exports = { searchByName, searchByPostcode, searchByCategory };
