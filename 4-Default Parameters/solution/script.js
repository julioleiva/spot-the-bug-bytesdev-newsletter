// With typeof
function calcPrice_(price, tax, discount) {
  tax = typeof tax === "undefined" ? 0.05 : tax;
  discount = typeof discount === "undefined" ? 0 : discount;

  return price + price * tax - price * discount;
}

const result_ = calcPrice_(10, 0, 0.1);
// If tax is undefined, it gets assigned 0.05.
// If tax is 0, it is not treated as falsy, so its value is preserved.

console.log('With typeoff',result_);

// With default parameters
function calcPrice(price, tax = 0.05, discount = 0 ) {
    return price + price * tax - price * discount
}

const result = calcPrice(10, 0, 0.1);

console.log('With default parameters',result);

