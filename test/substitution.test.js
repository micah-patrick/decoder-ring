// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution", () => {
  it(`should returns false if the given alphabet isn't exactly 26 characters long`, () => {
    const input = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzib";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should correctly translate the given phrase, based on the alphabet given", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const input = "shouldfail";
    const alphabet = "xoyqmcgrukswaflnthdjpzibex";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message, before and after encoding", () => {
    const input = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message, before and after decoding", () => {
    const input = "elp xhm xf mbymwwmfj dne";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "you are an excellent spy";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input = "Thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});
