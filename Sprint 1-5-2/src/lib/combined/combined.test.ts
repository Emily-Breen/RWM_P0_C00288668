import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined (mine -> peer)', () => {
    it('decrements numbers below the first, then applies fizzbuzz', () => {
        expect(combinedFilter([4, 2, 6, 5, 15])).toEqual([4, 1, 3, 5, 0]);
    });

    it('does nothing if all numbers are >= first, but still fizzbuzzes', () => {
        expect(combinedFilter([5, 6, 10, 12])).toEqual([5, 6, 5, 3]);
    });

    it('handles a single-element array correctly', () => {
        expect(combinedFilter([15])).toEqual([0]);
    });
});
