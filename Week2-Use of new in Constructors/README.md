[text](https://bytes.dev/archives/2)

## 👀 => the role of `this`, how JavaScript handles object creation, constructors, and prototypes.

---

### **The Bug**

#### Original Code:
```javascript
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.age = 0;
}

Animal.prototype.birthday = function () {
  this.age++;
};

const leo = Animal('Leo', 'Lion');
```

1. **What’s wrong?**
   - The constructor function `Animal` is being called **without the `new` keyword**.
   - When a function is invoked normally (without `new`), the `this` context inside the function refers to the **global object** (in non-strict mode) or is `undefined` (in strict mode).
   - In this case, `Animal('Leo', 'Lion')` will assign properties `name`, `type`, and `age` to the **global object** (or throw an error in strict mode), not to an instance of `Animal`.

#### Correct Code:
```javascript
const leo = new Animal('Leo', 'Lion');
```

By using `new`, JavaScript creates a new object, sets it as the `this` context in the constructor, and links the object to `Animal.prototype`.

---

### **Key Language Features**

#### 1. **Constructor Functions**
   - A constructor function is any regular function intended to be used with the `new` keyword.
   - When a function is called with `new`:
     1. A new empty object is created.
     2. The `this` inside the function is set to reference the new object.
     3. The object’s `[[Prototype]]` is linked to the function’s `.prototype`.
     4. The function returns the new object implicitly (if it doesn’t return anything else).

   Example:
   ```javascript
   function Animal(name, type) {
     this.name = name;
     this.type = type;
     this.age = 0;
   }

   const leo = new Animal('Leo', 'Lion');
   console.log(leo); // { name: 'Leo', type: 'Lion', age: 0 }
   ```

#### 2. **The `this` Keyword**
   - `this` refers to the context in which a function is called.
     - **Without `new`:** In non-strict mode, `this` refers to the global object (`window` in browsers). In strict mode, `this` is `undefined`.
     - **With `new`:** `this` refers to the newly created object.

   **Why the Bug Occurs:**
   ```javascript
   // Without new
   Animal('Leo', 'Lion');
   console.log(window.name); // 'Leo'
   console.log(window.type); // 'Lion'
   ```

   This pollutes the global scope, as `this` refers to the global object instead of a new `Animal` instance.

#### 3. **Prototypes**
   - Every function in JavaScript has a `prototype` property, which is used when the function is called with `new`.
   - The newly created object inherits methods and properties from the constructor’s prototype via the `[[Prototype]]` internal slot (accessible with `__proto__` or `Object.getPrototypeOf`).

   Example:
   ```javascript
   Animal.prototype.birthday = function () {
     this.age++;
   };

   const leo = new Animal('Leo', 'Lion');
   leo.birthday();
   console.log(leo.age); // 1
   ```

   Here, `leo` inherits the `birthday` method from `Animal.prototype`.

#### 4. **The `new` Keyword**
   - The `new` keyword does the following:
     1. Creates a new object.
     2. Sets the `[[Prototype]]` of the new object to the constructor function’s `.prototype`.
     3. Binds `this` in the constructor function to the new object.
     4. Returns the new object (unless the function explicitly returns another object).

---

### **The Correct Flow**

```javascript
function Animal(name, type) {
  // Step 2: `this` is bound to a new object
  this.name = name;    // this.name = 'Leo';
  this.type = type;    // this.type = 'Lion';
  this.age = 0;        // this.age = 0;
}

Animal.prototype.birthday = function () {
  this.age++;
};

const leo = new Animal('Leo', 'Lion'); // Step 1: Create new object, link prototype
console.log(leo); // { name: 'Leo', type: 'Lion', age: 0 }

leo.birthday();   // Call the prototype method
console.log(leo.age); // 1
```

---

### **Key Points to Remember**
1. **Constructor Functions Require `new`:**
   - If a function is intended to be used as a constructor, always call it with `new` to avoid polluting the global scope or causing errors in strict mode.

2. **Prototypes Enable Method Sharing:**
   - Methods defined on the prototype are shared among all instances, saving memory compared to defining methods directly on the instance.

3. **`this` Context Depends on How a Function Is Called:**
   - Regular function call: `this` is the global object (or `undefined` in strict mode).
   - `new` call: `this` is the newly created object.

4. **ES6 Classes as Modern Alternatives:**
   Modern JavaScript allows the use of `class` syntax, which wraps this behavior more cleanly and ensures proper usage of `this`:

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

   Using classes avoids accidental errors like forgetting the `new` keyword, as `class` constructors must be invoked with `new`.

--- 

This deep dive illustrates the importance of understanding object creation, the role of `this`, and how prototypes work in JavaScript