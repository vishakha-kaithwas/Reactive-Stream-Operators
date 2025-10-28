// concat.js
import { concat, of } from 'rxjs';

const first = of('Hello');
const second = of('World');

concat(first, second).subscribe(x => console.log("concat →", x));

/*
Explanation:
concat() runs observables sequentially —
it waits for the first to complete before starting the next.
*/
