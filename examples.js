const { Observable } = require('rxjs');


// map
// console.log('----- map -----');
// let arr1 = Array.of(1, 2, 3).map(x => 10 * x);
// console.log(arr1);
// let example1 = Observable.of(1, 2, 3).map(x => 10 * x);
// example1.subscribe(console.log);



// filter
// console.log('\n----- filter -----');
// let arr2 = Array.of(0, 1, 2, 3, 4).filter(x => x % 2 === 1);
// console.log(arr2);
// let example2 = Observable.of(0, 1, 2, 3, 4).filter(x => x % 2 === 1);
// example2.subscribe(console.log);



// scan
// console.log('\n----- scan -----');
// let example3 = Observable.of(1, 2, 3).scan((sum, item) => sum + item, 0);
// example3.subscribe(console.log);



// startWith
// console.log('\n----- startWith -----');
// let example4 = Observable.of(1, 2, 3).startWith(0);
// example4.subscribe(console.log);



// interval + take
// console.log('\n----- interval -----');
// let example5 = Observable.interval(1000).take(4);
// example5.subscribe(console.log);


// withLatestFrom
// console.log('\n----- withLatestFrom -----');
// let obs3 = Observable.interval(400).take(3);
// let example6 = Observable.interval(250).withLatestFrom(obs3, (x, y) => [x, y]).take(6);
// example6.subscribe(console.log);


// takeWhile
// console.log('\n----- takeWhile -----');
// let example7 = Observable.of(2, 3, 4, 5, 6).takeWhile(x => x < 4);
// example7.subscribe(console.log);
