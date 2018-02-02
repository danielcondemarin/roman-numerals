import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

describe('Roman Numeral Generator - 0 - 99 tests', () => {
	it('returns empty string for number zero', () => {
		assert.equal(Generator(0), '');
	});

	it('returns I for 1', () => {
		assert.equal(Generator(1), 'I');
	});

	it('returns II for 2', () => {
		assert.equal(Generator(2), 'II');
	});

	it('returns III for 3', () => {
		assert.equal(Generator(3), 'III');
	});

	it('returns IV for 4', () => {
		assert.equal(Generator(4), 'IV');
	});

	it('returns V for 5', () => {
		assert.equal(Generator(5), 'V');
	});

	it('returns VI for 6', () => {
		assert.equal(Generator(6), 'VI');
	});

	it('returns VII for 7', () => {
		assert.equal(Generator(7), 'VII');
	});

	it('returns VIII for 8', () => {
		assert.equal(Generator(8), 'VIII');
	});

	it('returns IX for 9', () => {
		assert.equal(Generator(9), 'IX');
	});

	it('returns X for 10', () => {
		assert.equal(Generator(10), 'X');
	});

	it('returns XII for 12', () => {
		assert.equal(Generator(12), 'XII');
	});

	it('returns XIV for 14', () => {
		assert.equal(Generator(14), 'XIV');
	});

	it('returns XV for 15', () => {
		assert.equal(Generator(15), 'XV');
	});

	it('returns XVI for 16', () => {
		assert.equal(Generator(16), 'XVI');
	});

	it('returns XIX for 19', () => {
		assert.equal(Generator(19), 'XIX');
	});

	it('returns XX for 20', () => {
		assert.equal(Generator(20), 'XX');
	});

	it('returns XXIX for 29', () => {
		assert.equal(Generator(29), 'XXIX');
	})

	it('returns XXX for 30', () => {
		assert.equal(Generator(30), 'XXX');
	});

	it('returns XL for 40', () => {
		assert.equal(Generator(40), 'XL');
	});

	it('returns L for 50', () => {
		assert.equal(Generator(50), 'L');
	});

	it('returns XC for 90', () => {
		assert.equal(Generator(90), 'XC');
	});
});