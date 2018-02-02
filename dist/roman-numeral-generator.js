'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Generator;

var _symbols = require('../data/symbols.json');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneratorRecurse = function GeneratorRecurse(num, str, symbolPos) {
	if (num === 0) {
		return str;
	}

	var currentSymbol = _symbols2.default[symbolPos];

	if (currentSymbol.val > num) {
		return GeneratorRecurse(num, str, symbolPos + 1);
	}

	var newNum = num - currentSymbol.val;
	str = str + currentSymbol.label;

	return GeneratorRecurse(newNum, str, symbolPos);
};

function Generator(inputNumber) {
	if (isNaN(inputNumber) || !Number.isInteger(inputNumber) || inputNumber < 0) {
		throw new Error('Invalid input. Please enter a valid positive integer');
	}

	var num = parseInt(inputNumber, 10);

	return GeneratorRecurse(num, '', 0);
};