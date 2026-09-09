// Called by the acquirer when a refund settles.
function onRefundSettled(payload) {
  const { card } = payload;
  console.log("refund callback", card.number, payload.amount);
}

module.exports = { onRefundSettled };
