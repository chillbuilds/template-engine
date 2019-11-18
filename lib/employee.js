class Employee {
  constructor(name, email, position, id) {
    this.name = name;
    this.email = email;
    this.position = position;
    this.id = id;
  }

  getName(name) {
    return this.name;
  }

  getId(id) {
    return this.id;
  }

  getEmail(email) {
    return this.email;
  }

  getRole(position) {
    return "Employee";
  }
}

module.exports = Employee;