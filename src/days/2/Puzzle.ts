import { intCode } from '../../utils/intcode.ts';

const first = (input: string) => {
  return intCode(
    input
      .split(',')
      .filter(Boolean)
      .map((value) => Number.parseInt(value))
  )[0];
};

const expectedFirstSolution = '3500';

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { expectedFirstSolution, expectedSecondSolution, first, second };
