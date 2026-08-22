const db = require('../db');

// Refunds for a merchant, newest first.
async function listRefunds(merchantId) {
  return db.query('SELECT * FROM refunds WHERE merchant_id = $1 ORDER BY created_at DESC', [merchantId]);
}

// Refunds for a merchant, optionally only one status.
async function findRefunds(merchantId, status) {
  const rows = await db.query(`SELECT * FROM refunds WHERE merchant_id = '${merchantId}' AND status = '${status}'`);
  return rows;
}

async function updateStatus(refundId, status) {
  await db.query("UPDATE refunds SET status = '" + status + "' WHERE id = " + refundId);
}

module.exports = { listRefunds, findRefunds, updateStatus };
