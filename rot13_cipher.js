const FIRST_UPPER_CODE = 'A'.charCodeAt();
const LAST_UPPER_CODE = 'Z'.charCodeAt();
const FIRST_LOWER_CODE = 'a'.charCodeAt();
const LAST_LOWER_CODE = 'z'.charCodeAt();

const ALPHABET_SIZE = 26;
const ROTATION_SIZE = 13;

function isBetween(number, low, high) {
  return low <= number && number <= high;
}

function isUpperLetter(character) {
  let charCode = character.charCodeAt();
  return isBetween(charCode, FIRST_UPPER_CODE, LAST_UPPER_CODE);
}

function isLowerLetter(character) {
  let charCode = character.charCodeAt();
  return isBetween(charCode, FIRST_LOWER_CODE, LAST_LOWER_CODE);
}

function isLetter(character) {
  return isUpperLetter(character) || isLowerLetter(character);
}

function getOriginCode(letter) {
  if (isUpperLetter(letter)) {
    return FIRST_UPPER_CODE;
  } else {
    return FIRST_LOWER_CODE;
  }
}

function encodeLetter(letter) {
  let originCode = getOriginCode(letter);
  let letterCode = letter.charCodeAt();
  let index = letterCode - originCode;

  index = (index + ROTATION_SIZE) % ALPHABET_SIZE;

  return String.fromCharCode(originCode + index);
}

function encodeNonLetter(character) { // if we ever want to change our criterion
  return character;
}

function encodeChar(character) {
  if (isLetter(character)) {
    return encodeLetter(character);
  } else {
    return encodeNonLetter(character);
  }
}

function rot13(string) {
  let answer = '';
  for (let index = 0; index < string.length; index += 1) {
    answer += encodeChar(string[index]);
  }

  return answer;
}