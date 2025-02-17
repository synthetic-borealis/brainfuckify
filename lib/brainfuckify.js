const repeat = require('./util/repeat');

/***
 * Eagerly compiles a bit of text to brainfuck.
 * @param {string} text A string of text.
 * @returns {string} Generated brainfuck code.
 */
function brainfuckify(text) {
  return [...text]
    .map((char) => char.charCodeAt(0))
    .map((asciiValue) => repeat('+', asciiValue))
    .join('.>\n') + '.';
}

module.exports = brainfuckify;
