import Time from './dist/time.js'
// Create a Date() object for Christmas
let christmas = new Time([2021, 11, 25], {days: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]});

// Get some details
let day = christmas.getDay();
let month = christmas.getMonth();
console.log(day, month);

// Modify the date
let newYear = christmas.addDays(7).addYears(1)
console.log(newYear, christmas); 