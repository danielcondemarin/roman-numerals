import symbols from '../data/symbols.json';

const GeneratorRecurse = (num, symbolPos) => {
	if (num === 0) {
		return '';
	}

	const currentSymbol = symbols[symbolPos];
	
	if (currentSymbol.val > num) {
		return GeneratorRecurse(num, symbolPos + 1);
	}

	const newNum = num - currentSymbol.val;

	return currentSymbol.label + GeneratorRecurse(newNum, symbolPos);
};

export default function Generator(inputNumber) {
	if (isNaN(inputNumber) || !Number.isInteger(inputNumber) || inputNumber < 0) {
		throw new Error('Invalid input. Please enter a valid positive integer')
	}

	const num = parseInt(inputNumber, 10);

	return GeneratorRecurse(num, 0);
};