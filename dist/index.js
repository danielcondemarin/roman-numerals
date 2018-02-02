'use strict';

var _yargs = require('yargs');

var _romanNumeralGenerator = require('./roman-numeral-generator');

var _romanNumeralGenerator2 = _interopRequireDefault(_romanNumeralGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var romanNumeral = (0, _romanNumeralGenerator2.default)(_yargs.argv.number);

console.log(romanNumeral);