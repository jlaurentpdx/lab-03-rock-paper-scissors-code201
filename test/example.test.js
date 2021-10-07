// IMPORT MODULES under test here:
import { doesUserWin } from "../utilities.js";

const test = QUnit.test;

test('User: grass, CPU: grass', (expect) => {
    const expected = 'tie';
    const actual = doesUserWin('grass', 'grass');
    expect.equal(actual, expected);
});

test('User: fire, CPU: fire', (expect) => {
    const expected = 'tie';
    const actual = doesUserWin('fire', 'fire');
    expect.equal(actual, expected);
});

test('User: water, CPU: water', (expect) => {
    const expected = 'tie';
    const actual = doesUserWin('water', 'water');
    expect.equal(actual, expected);
});




test('User: grass, CPU: water', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('grass', 'water');
    expect.equal(actual, expected);
});

test('User: fire, CPU: grass', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('fire', 'grass');
    expect.equal(actual, expected);
});

test('User: water, CPU: fire', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('water', 'fire');
    expect.equal(actual, expected);
});




test('User: grass, CPU: fire', (expect) => {
    const expected = 'lose';
    const actual = doesUserWin('grass', 'fire');
    expect.equal(actual, expected);
});

test('User: fire, CPU: water', (expect) => {
    const expected = 'lose';
    const actual = doesUserWin('fire', 'water');
    expect.equal(actual, expected);
});

test('User: water, CPU: grass', (expect) => {
    const expected = 'lose';
    const actual = doesUserWin('water', 'grass');
    expect.equal(actual, expected);
});