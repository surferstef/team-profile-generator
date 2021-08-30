const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('Stef', '28', 'stefhall@comcast.net', 'surferstef');

    expect(engineer.name).toBe('Stef');
    expect(engineer.id).toBe('28');
    expect(engineer.email).toBe('stefhall@comcast.net');
    expect(engineer.github).toBe('surferstef');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Stef', '28', 'stefhall@comcast.net', 'surferstef');

    expect(engineer.getGithub()).toBe('surferstef')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Stef', '28', 'stefhall@comcast.net', 'surferstef');

    expect(engineer.getRole()).toBe('Engineer');
});