// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (
      !shift ||
      shift < -25 ||
      shift > 25 ||
      shift === 0 ||
      typeof shift !== "number"
    )
      return false;
    input = input.toLowerCase();
    if (!encode) shift = shift - shift * 2;
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const inputChar = input[i];
      const inputCharCode = inputChar.charCodeAt();
      let outputCharCode = inputCharCode;
      if (inputCharCode >= 97 && inputCharCode <= 122) {
        outputCharCode = inputCharCode + shift;
        if (outputCharCode < 97) outputCharCode += 26;
        if (outputCharCode > 122) outputCharCode -= 26;
      }
      const outputChar = String.fromCharCode(outputCharCode);
      output += outputChar;
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
