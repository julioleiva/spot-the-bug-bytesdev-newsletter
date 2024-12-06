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
  console.log(leo.age);

//   ---

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
  
  const leo_ = new Animal('Leo_', 'Lion');
  leo_.birthday();
  console.log(leo_.age);