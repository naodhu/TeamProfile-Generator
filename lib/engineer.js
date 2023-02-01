// Require the Employee class
const Employee = require('./Employee');

// Define the Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }
  
  getGithub() {
    return this.github;
  }
  
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class
module.exports = Engineer;
