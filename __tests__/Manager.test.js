const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Courtney', 716, 'ckoehler16@gmailcom', 1122);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("creates the employee's role specific to 'manager'", () => {
    const manager = new Manager('Courtney', 716, 'ckoehler16@gmailcom', 1122);

    expect(manager.getRole()).toEqual('Manager');
});