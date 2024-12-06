[text](https://bytes.dev/archives/1)

### **Deep Dive into the Bug**

#### Code:
```javascript
const Animal = (name, type) => {
  this.name = name;
  this.type = type;
  this.age = 0;
};

Animal.prototype.birthday = function () {
  this.age++;
};

const leo = new Animal('Leo', 'Lion');
```

---

### **The Bug**

This code will throw an error:  
`TypeError: Animal is not a constructor`

---

### **Why Does This Happen?**

#### 1. **Arrow Functions in JavaScript**
Arrow functions are **not designed to be used as constructors**. Unlike regular functions, arrow functions:
- Do **not** have their own `this`.
- Do **not** have a `prototype` property.
- Cannot be invoked with the `new` keyword.

#### The key difference:
In a regular function, `this` is dynamically bound based on how the function is called. In an arrow function, `this` is **lexically bound** to the value of `this` in the scope where the function was defined.

#### Code Analysis:
```javascript
const Animal = (name, type) => {
  this.name = name;  // `this` refers to the outer context (not the new object).
  this.type = type;
  this.age = 0;
};
```
Here:
- The `this` inside the arrow function does **not** refer to a new object (as would happen with `new` and a regular constructor function).
- Instead, `this` refers to the outer scope where the `Animal` function is defined.

When you call `new Animal('Leo', 'Lion')`, JavaScript expects `Animal` to behave as a constructor function. However, because `Animal` is an arrow function, it doesn't support the `new` keyword, causing a `TypeError`.

---

### **Key Language Features Involved**

#### 1. **Arrow Functions**
   - Arrow functions are concise and automatically bind `this` to the enclosing lexical scope.
   - They **do not have their own `this`**, `arguments`, or `prototype`.

   Example:
   ```javascript
   const testArrow = () => {
     console.log(this); // `this` refers to the surrounding lexical scope.
   };

   const testRegular = function () {
     console.log(this); // `this` depends on how the function is called.
   };
   ```

#### 2. **Constructors and `this`**
   - A constructor function (or class) is expected to create a new object and use `this` to assign properties to that object.
   - When called with `new`, JavaScript:
     1. Creates a new object.
     2. Links the object's `[[Prototype]]` to the function's `.prototype`.
     3. Sets the function's `this` to refer to the new object.
     4. Returns the new object (unless the function explicitly returns another object).

   Since arrow functions lack their own `this`, they cannot participate in this flow.

---

### **The Solution**

#### Use a Regular Function or Class Declaration
Instead of using an arrow function, define `Animal` as a regular function or use a `class`. Both approaches allow `new` to work as intended.

---

#### **Option 1: Regular Constructor Function**
```javascript
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.age = 0;
}

Animal.prototype.birthday = function () {
  this.age++;
};

const leo = new Animal('Leo', 'Lion');
leo.birthday();
console.log(leo.age); // 1
```

---

#### **Option 2: ES6 Class**
Using `class` is the modern way to define constructors and methods, providing a cleaner and more intuitive syntax.

```javascript
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = 0;
  }

  birthday() {
    this.age++;
  }
}

const leo = new Animal('Leo', 'Lion');
leo.birthday();
console.log(leo.age); // 1
```
---

### **Final Notes**
1. **Arrow functions are not suitable for constructors.** They are great for callbacks or methods where you want `this` to be bound to the surrounding scope.
2. Use regular functions or `class` declarations for constructor functions.
3. If you accidentally use an arrow function in a constructor context, you'll encounter errors because `this` and `prototype` are not supported.

By using a regular function or `class`, you ensure that `new` works properly, `this` is correctly set, and you can take advantage of prototypal inheritance.