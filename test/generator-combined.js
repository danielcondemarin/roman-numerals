import assert from 'assert';
import Generator from '../lib/roman-numeral-generator';

describe('Roman Numeral Generator - combined', () => {
	// 1776 as MDCCLXXVI, the date written on the book held by the Statue of Liberty.[5]
	// 1954 as MCMLIV, as in the trailer for the movie The Last Time I Saw Paris[6]
	// 1990 as MCMXC, used as the title of musical project Enigma's debut album MCMXC a.D., named after the year of its release.
	// 2014 as MMXIV, the year of the games of the XXII (22nd) Olympic Winter Games (in Sochi)

	it('can convert date written on the book held by the Statue of Liberty', () => {
		assert.equal(Generator(1776), 'MDCCLXXVI');
	});

	it('can convert date as in the trailer for the movie The Last Time I Saw Paris[6] as in the trailer for the movie The Last Time I Saw Paris[6]', () => {
		assert.equal(Generator(1954), 'MCMLIV');
	});

	it('can convert date used as the title of musical project Enigma\'s debut album MCMXC a.D., named after the year of its release', () => {
		assert.equal(Generator(1990), 'MCMXC');
	});

	it('can convert date of the year of the games of the XXII (22nd) Olympic Winter Games (in Sochi)', () => {
		assert.equal(Generator(2014), 'MMXIV');
	});
});