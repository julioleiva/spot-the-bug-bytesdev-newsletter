### **Explanation**

#### **Problem**

##### Initial Code:
```javascript
function calcPrice(price, tax, discount) {
  tax = tax || 0.05;
  discount = discount || 0;

  return // math
}

calcPrice(10, 0, 0.1);
```

1. **`||` (Logical OR operator):**
   The `||` operator evaluates the left-hand side. If the value is "falsy" (false in a boolean context), it returns the right-hand side. In JavaScript, the following values are considered *falsy*:
   - `false`
   - `0`
   - `""` (empty string)
   - `null`
   - `undefined`
   - `NaN`

2. **The problem with `0`:**
   In this case:
   - If `tax` or `discount` are explicitly passed as `0`, the `||` operator treats them as falsy and assigns the default values (`0.05` for `tax` and `0` for `discount`).
   - This leads to incorrect behavior because `0` is a valid value and should not be replaced.

##### Execution Example:
```javascript
calcPrice(10, 0, 0.1);
// tax = 0 || 0.05 -> 0.05 (incorrect, it should be 0)
// discount = 0.1 || 0 -> 0.1 (correct)
```


### **Solution**

#### **1. Use `typeof` to check for `undefined`**
This ensures that only `undefined` values get assigned default values, allowing `0` (or any other valid value) to remain as is.

```javascript
function calcPrice(price, tax, discount) {
  tax = typeof tax === 'undefined' ? 0.05 : tax;
  discount = typeof discount === 'undefined' ? 0 : discount;

  return price + price * tax - price * discount; // math formula
}
```

- If `tax` is `undefined`, it gets assigned `0.05`.
- If `tax` is `0`, it is not treated as falsy, so its value is preserved.

#### **2. Use ES6 default parameters**
Since ECMAScript 2015 (ES6), JavaScript allows defining default values directly in the function declaration:

```javascript
function calcPrice(price, tax = 0.05, discount = 0) {
  return price + price * tax - price * discount; // math formula
}
```

- If no value is provided for `tax` or `discount`, the default value defined in the function will be used.
- If `0` is passed explicitly, it will be respected and not replaced by the default.

##### Execution Example with ES6:
```javascript
calcPrice(10, 0, 0.1);
// tax = 0 (preserved because it's explicitly passed)
// discount = 0.1 (explicitly passed)
```


### **Summary**
- **Problem:** Using `||` to assign default values can replace valid values like `0` because `0` is considered falsy.
- **Solutions:**
  1. Check explicitly if parameters are `undefined` using `typeof`.
  2. Use ES6 default parameters (`tax = 0.05`), which is cleaner and easier to read.

#### **Example with Math Formula**

```javascript
function calcPrice(price, tax = 0.05, discount = 0) {
  return price + price * tax - price * discount; // math formula
}

// Example usage
console.log(calcPrice(100, 0.1, 0.2)); // 100 + 100*0.1 - 100*0.2 = 90
console.log(calcPrice(100)); // 100 + 100*0.05 - 100*0 = 105
```


### **Explanation of the Formula**
1. `price + price * tax`: Calculates the base price plus the tax.
2. `- price * discount`: Subtracts the discount amount.

The approach using ES6 default parameters is generally preferred because it is more modern, concise, and less error-prone. 😊