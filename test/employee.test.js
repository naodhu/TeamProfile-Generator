const Employee = require("../lib/employee");

// describe("Employee", () => {
//   it("should create an instance of Employee", () => {
//     const employee = new Employee("Jane", "Manager", "jane@company.com");

//     expect(employee).toBeInstanceOf(Employee);
//   });

//   it("should set the name, role, and email correctly", () => {
//     const employee = new Employee("Jane", "Manager", "jane@company.com");

//     expect(employee.name).toEqual("Jane");
//     expect(employee.role).toEqual("Manager");
//     expect(employee.email).toEqual("jane@company.com");
//   });

//   it("should generate the correct ID", () => {
//     const employee = new Employee("Jane", "Manager", "jane@company.com");

//     expect(employee.id).toBeDefined();
//   });
// });



test('Can set name via constructor argument', () => {
  const name = 'Alice';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const id = 100;
  const employee = new Employee('Foo', id);
  expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
  const email = 'test@test.com';
  const employee = new Employee('Foo', 1, email);
  expect(employee.email).toBe(email);
});

test('Can get name via getName()', () => {
  const testValue = 'Alice';
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
  const testValue = 100;
  const employee = new Employee('Foo', testValue);
  expect(employee.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
  const testValue = 'test@test.com';
  const employee = new Employee('Foo', 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = 'Employee';
  const employee = new Employee('Foo', 1, 'test@test.com');
  expect(employee.getRole()).toBe(testValue);
});

