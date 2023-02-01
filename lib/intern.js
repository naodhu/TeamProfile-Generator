// Require the Employee class
const Employee = require('./Employee');

// Define the Intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title =  "Intern";
  }
  
  getSchool() {
    return this.school;
  }
  
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class
module.exports = Intern;
