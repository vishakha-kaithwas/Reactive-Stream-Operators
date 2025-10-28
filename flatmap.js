// flatmap.js
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const letters = of('A', 'B', 'C');

const expanded = letters.pipe(
  mergeMap(letter => of(`${letter}1`, `${letter}2`))
);

expanded.subscribe(x => console.log("flatMap →", x));

/*
Explanation:
flatMap() or mergeMap() converts each emitted item
into an inner observable and then flattens all results
into one combined stream.
*/
