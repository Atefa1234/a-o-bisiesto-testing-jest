const {expect} = require ("@jest/globals");
const leapyear = require("../leapyear");


describe("tests that validate if a year is leap year or no", ()=>{
    const leap_year = new leapyear();
    test('A year is not a leap year if it is not divisible by 4', ()=>{
        const year_entered = 1997;
        const expexted_answer = false;
        const recieved_answer = leap_year.leapyear(year_entered);
        expect(recieved_answer).toBe(expexted_answer);
    })
    test('A year is a leap year if it is divisible by 4', ()=>{
        const year_entered = 1996;
        const expected_answer = true;
        const recieved_answer = leap_year.leapyear(year_entered);
        expect(recieved_answer).toBe(expected_answer);
    })
    test('A year is a leap year if it is divisible by 400',()=>{
        const year_entered = 1600;
        const expected_answer = true;
        const recieved_answer = leap_year.leapyear(year_entered);
        expect(recieved_answer).toBe(expected_answer);
    })
})