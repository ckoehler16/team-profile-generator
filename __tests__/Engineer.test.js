const Engineer = require("../lib/Engineer");

test('creates an engineer object', () => {
    const engineer = new Engineer('Courtney', 716, 'ckoehler16@gmailcom', 'ckoehler16');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubUser).toEqual(expect.any(String));
});

test("get the engineer's github username", () => {
    const engineer = new Engineer('Courtney', 716, 'ckoehler16@gmailcom', 'ckoehler16');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("creates the employee's role specific to 'engineer'", () => {
    const engineer = new Engineer('Courtney', 716, 'ckoehler16@gmailcom', 'ckoehler16');
    
    expect(engineer.getRole()).toEqual('Engineer');
});
