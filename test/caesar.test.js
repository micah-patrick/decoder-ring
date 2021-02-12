// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar", () => {
  describe("happy path", () => {
    it("should shift to the right given a positive shift value", () => {
      const input = "thinkful";
      const expected = "wklqnixo";
      const actual = caesar(input, 3);
      expect(actual).to.equal(expected);
    });
    it("should shift to the left given a negative shift value", () => {
      const input = "thinkful";
      const expected = "qefkhcri";
      const actual = caesar(input, -3);
      expect(actual).to.equal(expected);
    });
    it("should reverse shift direction given a false encode value", () => {
      const input = "wklqnixo";
      const expected = "thinkful";
      const actual = caesar(input, 3, false);
      expect(actual).to.equal(expected);
    });
    it("special characters and spaces should not shift", () => {
      const input = "This is a secret message!";
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(input, 8);
      expect(actual).to.equal(expected);
    });
    it("should decode without affecting spaces or special characters", () => {
      const input = "bpqa qa I amkzmb umaaiom!";
      const expected = "this is a secret message!";
      const actual = caesar(input, 8, false);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "ABCdef";
      const expected = "defghi";
      const actual = caesar(input, 3);
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const input = "xyz";
      const expected = "abc";
      const actual = caesar(input, 3);
      expect(actual).to.equal(expected);
    });
  });
  describe("edge cases", () => {
    it("should return false if no shift value is given", () => {
      const input = "thinkful";
      const expected = false;
      const actual = caesar(input);
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is greater than 25", () => {
      const input = "thinkful";
      const expected = false;
      const actual = caesar(input, 99);
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is less than -25", () => {
      const input = "thinkful";
      const expected = false;
      const actual = caesar(input, -26);
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is 0", () => {
      const input = "thinkful";
      const expected = false;
      const actual = caesar(input, 0);
      expect(actual).to.equal(expected);
    });
  });
});

/*   Examples
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false */
