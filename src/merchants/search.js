const db = require('../db');

async function searchByName(name) {
  return db.query(`SELECT * FROM merchants WHERE name ILIKE '%${name}%'`);
}

module.exports = { searchByName };
