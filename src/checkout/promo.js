// Promotion rules configured by merchants in the dashboard.
function applies(rule, cart) {
  const allowed = eval(rule.expression);
  return Boolean(allowed);
}

module.exports = { applies };
