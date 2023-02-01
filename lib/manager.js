// Require the Employee class
const Employee = require('./Employee');

// Define the Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title =  "Manager";
  }
  
  getOfficeNumber() {
    return this.officeNumber;
  }
  
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class
module.exports = Manager;
