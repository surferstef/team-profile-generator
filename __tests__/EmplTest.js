const Employee = require("../lib/Employee")


test('Creates new employee object', () => {
    const employee = new Employee('Stef', '28', 'stefhall@comcast.net');

    expect(employee.name).toBe('Stef');
    expect(employee.id).toBe('28');
    expect(employee.email).toBe('stefhall@comcast.net');
});

test('gets employees name', () => {
    const employee = new Employee('Stef', '28', 'stefhall@comcast.net');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => {
    const employee = new Employee('Stef', '28', 'stefhall@comcast.net');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employees email', () => {
    const employee = new Employee('Stef', '28', 'stefhall@comcast.net');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employees role', () => {
    const employee = new Employee('Stef', '28', 'stefhall@comcast.net');

    expect(employee.getRole()).toBe('Employee');
});