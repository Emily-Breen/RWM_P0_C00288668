import {describe, it, expect} from 'vitest';
import { decrementlessthanfirst } from './decrementlessthanfirst';
/*pass test case */
describe('decrementIfLessThanFirst', () => {
  it('works with sample input', () => {
    const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6, 1];
    const output = [4, 1, 8, 2, 9, 4, 10, 5, 11, 6, 0];
    expect(decrementlessthanfirst(input)).toEqual(output);
  });
});
/*fail test case */
describe('decrementIfLessThanFirst', () => {
it ('fail with wrong output', () => {
    const input = [5,2,6,3];
    const incorrectOutput = [5,1,6,2]
    expect(decrementlessthanfirst(input)).toEqual(incorrectOutput);
});
});