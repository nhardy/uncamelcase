function inBound(value, lower, upper) {
  return value >= lower && value <= upper;
}

function isDigit(character) {
  return inBound(character.charCodeAt(0), 48, 57);
}

function isUpperCase(character) {
  return inBound(character.charCodeAt(0), 65, 90);
}

export default function uncamelCase(string, separator = ' ') {
  if (!string) return string;
  if (typeof string !== 'string') throw new TypeError();

  let result = '';

  const charArray = Array.from(string);
  let index = 0;

  const peekBehind = () => charArray[index - 1];
  const peek = () => charArray[index + 1];
  const peekAhead = () => charArray[index + 2];

  const shouldAddSeparator = () => {
    const character = charArray[index];

    // Dont insert a sepator if the previous character was one
    if ((peekBehind && peekBehind() === separator)
      // Don't insert a separator if the character is a separator
      || character === separator
      // Don't insert a separator if this is the last character
      || !peek()) return false;

    // Insert a separator if the next character is uppercase and is the last in a stretch
    return (isUpperCase(peek()) && peekAhead() && !isUpperCase(peekAhead()))
      // Insert a separator when changing to a digit
      || (!isDigit(character) && isDigit(peek()));
  };

  while (index < charArray.length) {
    const character = charArray[index];
    if (index === 0) {
      result += character.toUpperCase();
    } else {
      result += character;
    }
    if (shouldAddSeparator()) result += separator;
    index++;
  }

  return result;
}
