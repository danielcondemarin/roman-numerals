const symbols = [ 
	{ val: 1000, label: 'M' },
	{ val: 900, label: 'CM' },
	{ val: 500, label: 'D' },
	{ val: 400, label: 'CD' },
	{ val: 100, label: 'C' },
	{ val: 90, label: 'XC' },
	{ val: 50, label: 'L' },
	{ val: 40, label: 'XL' },
	{ val: 10, label: 'X' }, 
	{ val: 9, label: 'IX' }, 
	{ val: 5, label: 'V' }, 
	{ val: 4, label: 'IV' }, 
	{ val: 1, label: 'I' } 
]

const GeneratorRecurse = (num, str, symbolPos) => {
	if (num === 0 || symbolPos > (symbols.length - 1)) {
		return str;
	}

	let currentSymbol = symbols[symbolPos];
	
	if (currentSymbol.val > num) {
		return GeneratorRecurse(num, str, symbolPos + 1);
	}

	const newNum = num - currentSymbol.val;
	str = str + currentSymbol.label;

	return GeneratorRecurse(newNum, str, symbolPos);
};

export default function Generator(inputNumber) {
	if (isNaN(inputNumber) || !Number.isInteger(inputNumber)) {
		throw new Error('Invalid input. Please enter a valid positive integer')
	}

	let num = parseInt(inputNumber, 10);

	return GeneratorRecurse(num, '', 0);
};