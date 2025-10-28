// filter.js
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers = from([1, 2, 3, 4, 5, 6]);

const evenNumbers = numbers.pipe(
  filter(num => num % 2 === 0)
);

evenNumbers.subscribe(x => console.log("filter →", x));

/*
Explanation:
filter() passes only those values that satisfy the condition.
Here, only even numbers are emitted.
*/
