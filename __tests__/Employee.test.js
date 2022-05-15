const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Courtney', 716, 'ckoehler16@gmailcom');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets an employee's name", () => {
    const employee = new Employee('Courtney', 716, 'ckoehler16@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets an employee's id number", () => {
    const employee = new Employee('Courtney', 716, 'ckoehler16@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets an employee's email", () => {
    const employee = new Employee('Courtney', 716, 'ckoehler16@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets an employee's role", () => {
    const employee = new Employee('Courtney', 716, 'ckoehler16@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
console.log(new Employee());

