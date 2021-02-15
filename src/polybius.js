// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusCodes = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
    " ": " ",
  };

  function polybiusEncode(input) {
    input = input.toLowerCase();
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      let charCode = polybiusCodes[char];
      if(!charCode) charCode = char;
      output += charCode;
    }
    return output;
  }

  function polybiusDecode(input) {
    const inputSplit = input.split(" ");
    const inputNoSpaces = inputSplit.join("");
    if (inputNoSpaces.length % 2 != 0) return false;
    let output = "";
    let code = "";
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        code = " ";
        i--;
      } else {
        code = input[i] + input[i + 1];
      }
      let char = Object.keys(polybiusCodes).find(
        (key) => polybiusCodes[key] === code
      );
      if (char === "i") char = "(i/j)";
      if(!char) {output = false; break;}
      output += char;
    }
    return output;
  }

  function polybius(input, encode = true) {
    return encode ? polybiusEncode(input) : polybiusDecode(input);
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
