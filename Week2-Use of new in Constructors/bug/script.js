function Animal (name, type) {
    this.name = name
    this.type = type
    this.age = 0
  }
  
  Animal.prototype.birthday = function () {
    this.age++
  }
  
  const leo = Animal('Leo', 'Lion')

  console.log(leo);