import { decrementlessthanfirst } from "../filters/decrementlessthanfirst";
import {fizzbuzz,fizzbuzzes} from "peer-filter-C00194821/src/lib/filters";

export function combinedFilter(xs: number[]): number[] {
  const afterMine = decrementlessthanfirst(xs);
  return fizzbuzzes(afterMine);
}
