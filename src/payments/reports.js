const db = require('../db');

// Daily refunds export for finance.
async function refundsSince(from) {
  return db.query(`SELECT id, merchant_id, amount, status FROM refunds WHERE created_at > '${from}'`);
}

module.exports = { refundsSince };
