// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitutionEncode(input, alphabet) {
    input = input.toLowerCase();
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const charInput = input[i];
      const charCode = charInput.charCodeAt();
      let charOutput = charInput;
      if (charCode >= 97 && charCode <= 122) {
        const charIndex = charCode - 97;
        charOutput = alphabet[charIndex];
      }
      output += charOutput;
    }
    return output;
  }

  function substitutionDecode(input, alphabet) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const charInput = input[i];
      let charOutput = charInput;
      const charIndex = alphabet.indexOf(charInput);
      if (charIndex >= 0) {
        const charCode = charIndex + 97;
        charOutput = String.fromCharCode(charCode);
      }

      output += charOutput;
    }
    return output;
  }

  function checkAlphabetForRepeats(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
      const charA = alphabet[i];
      for (let j = 0; j < alphabet.length; j++) {
        const charB = alphabet[j];
        if (i !== j && charA === charB) return true;
      }
    }
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (checkAlphabetForRepeats(alphabet)) return false;
    return encode
      ? substitutionEncode(input, alphabet)
      : substitutionDecode(input, alphabet);
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
