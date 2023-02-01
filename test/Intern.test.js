const Intern = require('../lib/intern');

test('Can set school via constructor', () => {
  const testValue = "University of Washington";
  const e = new Intern("Mark", "i-24", "mark@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Marie", "i-11", "marie@email.com", "Harvard");
  expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = "Harvard";
  const e = new Intern("Marie", "i-11", "marie@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
