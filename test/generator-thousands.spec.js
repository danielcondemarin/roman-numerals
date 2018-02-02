import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

describe('Roman Numeral Generator - 1000 - X999 tests', () => {
	it('returns M for 1000', () => {
		assert.equal(Generator(1000), 'M');
	});

	it('returns MIX for 1009', () => {
		assert.equal(Generator(1009), 'MIX');
	});

	it('returns MCD for 1400', () => {
		assert.equal(Generator(1400), 'MCD');
	});

	it('returns MD for 1500', () => {
		assert.equal(Generator(1500), 'MD');
	});

	it('returns MCM for 1900', () => {
		assert.equal(Generator(1900), 'MCM');
	});

	it('returns MMMCMXCIX for 3999', () => {
		assert.equal(Generator(3999), 'MMMCMXCIX');
	});
});