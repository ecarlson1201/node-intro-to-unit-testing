// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return fizzbuzz, buzz, fizz, or number', function() {
    // range of normal inputs
    const normalCases = [
      {num:15, expected: 'fizz-buzz'},
      {num:5, expected: 'buzz'},
      {num:3, expected: 'fizz'},
      {num:7, expected: 7}
    ];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});