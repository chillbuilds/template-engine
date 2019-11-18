const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, position, id, github) {
        super(name, email, position, id, "Engineer");
        this.github = github;
        this.position = position;

    }
    getOffice(github) {
      return this.github;
    }

    getRole(title) {
      return "Manager";
    }
};

module.exports = Engineer;