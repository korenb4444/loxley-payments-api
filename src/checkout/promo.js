// Promotion rules configured by merchants in the dashboard.
function applies(rule, cart) {
  const allowed = eval(rule.expression);
  return Boolean(allowed);
}

function compile(rule) {
  return new Function("cart", rule.body);
}

module.exports = { applies, compile };
