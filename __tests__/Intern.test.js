const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Courtney', 716, 'ckoehler16@gmailcom', 'NCState');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets the intern's school", () => {
    const intern = new Intern('Courtney', 716, 'ckoehler16@gmailcom', 'NCState');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("creates the employee's role specific to 'intern'", () => {
    const intern = new Intern('Courtney', 716, 'ckoehler16@gmailcom', 'NCState');

    expect(intern.getRole()).toEqual('Intern');
});