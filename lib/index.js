import { argv } from 'yargs';
import Generator from './roman-numeral-generator';

const romanNumeral = Generator(argv.number);

console.log(romanNumeral);