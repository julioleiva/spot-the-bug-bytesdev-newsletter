function calcPrice(price, tax, discount) {
    tax = tax || 0.05;
    discount = discount || 0;
  
    return price + price * tax - price * discount;
}

const result = calcPrice(10, 0, 0.1);
// tax = 0 || 0.05 -> 0.05 (incorrect, it should be 0)
// discount = 0.1 || 0 -> 0.1 (correct)

console.log(result);
