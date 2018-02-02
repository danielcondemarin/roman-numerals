import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

const INVALID_INPUT_ERROR = /Invalid input/;

describe('Roman Numeral Generator Tests - Invalid Input', () => {
	it('throws error for negative integer', () => {
		assert.throws(() => {
			Generator(-1);
		}, INVALID_INPUT_ERROR);
	});

	it('throws error for invalid input string', () => {
		assert.throws(() => {
			Generator('abc');
		}, INVALID_INPUT_ERROR);
	});

	it('throws error for invalid input fraction', () => {
		assert.throws(() => {
			Generator(1.2);
		}, INVALID_INPUT_ERROR);
	});
});