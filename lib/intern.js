const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, email, position, id, school) {
        super(name, email, position, id, "Intern");
        this.school = school;
        this.position = position;
    }

    getSchool(school) {
      return this.school;
    }

    getRole(title) {
      return "Intern";
    }
};

module.exports = Intern;