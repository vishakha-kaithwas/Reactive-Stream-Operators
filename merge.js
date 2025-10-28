// merge.js
import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Two streams emitting values at different intervals
const stream1 = interval(1000).pipe(take(3)); // emits 0,1,2 every 1s
const stream2 = interval(500).pipe(take(3));  // emits 0,1,2 every 0.5s

merge(stream1, stream2).subscribe(x => console.log("merge →", x));

/*
Explanation:
merge() combines multiple observables and emits values
as soon as they are available (concurrently).
*/
