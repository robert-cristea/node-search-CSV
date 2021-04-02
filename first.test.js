const first = require('./first');
const second = require('./second');
const { expect } = require('@jest/globals');

test('firstTest', () => {
    console.log = jest.fn();
    first("T1023901784");
    // expect(console.log.mock.calls[1][0]).toBe('-Strora suniresuni UK Ltd');
    expect(console.log).toHaveBeenCalledWith('strora land');
    expect(console.log).toHaveBeenCalledWith('-Strora suniresuni UK Ltd');
    expect(console.log).toHaveBeenCalledWith('-Suniresuni London International Limited');
    expect(console.log).toHaveBeenCalledWith('-Suniresuni New Group Limited');
    expect(console.log).toHaveBeenCalledWith('-Suniresuni taniles Group Limited');
});

test('secondTest',()=>{
    console.log = jest.fn();
    second('R602666366674');
    expect(console.log).toHaveBeenCalledWith('Resalli & Co Limited');
    expect(console.log).toHaveBeenCalledWith('**X740144969838');
    expect(console.log).toHaveBeenCalledWith('-Resanebrone Limited');

})