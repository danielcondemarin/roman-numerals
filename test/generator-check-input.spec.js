import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

describe('Roman Numeral Generator Tests - Invalid Input', () => {
	it('throws error for invalid input string', () => {
		assert.throws(() => {
			Generator('abc');
		});
	});

	it('throws error for invalid input fraction', () => {
		assert.throws(() => {
			Generator(1.2);
		});
	});
});