export function decrementlessthanfirst(numbers: number[]): number[] {
  const n = numbers[0];
  return numbers.map((num, i) => (i === 0 || num >= n ? num : num - 1));
}