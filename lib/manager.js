const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, position, id, officenum) {
        super(name, email, position, id, "Manager");
        this.officenum = officenum;
        this.position = position;

    }
    getOffice(officenum) {
      return this.officenum;
    }

    getRole(title) {
      return "Manager";
    }
};

module.exports = Manager;