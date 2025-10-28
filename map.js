// map.js
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

// Observable: stream of numbers
const numbers = from([1, 2, 3, 4]);

// Using map() to square each number
const squared = numbers.pipe(
  map(num => num * num)
);

// Subscribe and print each transformed value
squared.subscribe(x => console.log("map →", x));

/*
Explanation:
map() transforms each emitted value.
Here, it squares each number before sending it forward.
*/
