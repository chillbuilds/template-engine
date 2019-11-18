const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officenum, title) {
        super(name, id, email, "Manager");
        this.office = office;
        this.title = title;

    }
    getOffice(officenum) {
      return this.officenum;
    }

    getRole(title) {
      return "Manager";
    }
};

module.exports = Manager;