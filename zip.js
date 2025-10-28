// zip.js
import { zip, of } from 'rxjs';

const numbers = of(1, 2, 3);
const letters = of('A', 'B', 'C');

zip(numbers, letters).subscribe(([n, l]) => console.log("zip →", n, l));

/*
Explanation:
zip() combines multiple observables and emits pairs
of values in order (1st with 1st, 2nd with 2nd, etc.).
*/
