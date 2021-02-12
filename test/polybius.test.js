// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
  describe("encoding", () => {
    it("should encode each letter into a number pair", () => {
      const input = "thinkful";
      const expected = "4432423352125413";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("should encode both i and j as 42", () => {
      const input = "ij";
      const expected = "4242";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const input = "hello world";
      const expected = "3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "Hello";
      const expected = "3251131343";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should decode each number pair into a letter", () => {
      const input = "3251131343";
      const expected = "hello";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
    it("should decode 42 as (i/j)", () => {
      const input = "4432423352125413";
      const expected = "th(i/j)nkful";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
    it("should leave spaces alone", () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
    it("should return false if an odd number of numbers is given", () => {
      const input = "44324233521254134";
      const expected = false;
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
});
