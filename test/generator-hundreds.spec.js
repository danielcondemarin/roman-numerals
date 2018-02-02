import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

describe('Roman Numeral Generator - 100 - 999 tests', () => {
	it('returns C for 100', () => {
		assert.equal(Generator(100), 'C');
	});

	it('returns CIX for 109', () => {
		assert.equal(Generator(109), 'CIX');
	});

	it('returns CD for 400', () => {
		assert.equal(Generator(400), 'CD');
	});

	it('returns D for 500', () => {
		assert.equal(Generator(500), 'D');
	});

	it('returns CM for 900', () => {
		assert.equal(Generator(900), 'CM');
	});
});