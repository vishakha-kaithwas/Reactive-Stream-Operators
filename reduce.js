// reduce.js
import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

const numbers = from([10, 20, 30, 40]);

const total = numbers.pipe(
  reduce((acc, val) => acc + val, 0)
);

total.subscribe(x => console.log("reduce →", x));

/*
Explanation:
reduce() applies an accumulator function
and emits only the final result.
Here, it adds all the numbers together.
*/
