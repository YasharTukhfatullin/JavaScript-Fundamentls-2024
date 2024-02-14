/**
 * Date Objects = Objects that contains values that represent dates and times 
 *                These date objects can be changed and formatted.
 */

// Date(year, month, day, hour, minute, second, ms)
const date = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date); 

const newDate = new Date("2024-01-02T12:00:00Z");
console.log(newDate); 

const newDate2 = new Date();
const year = newDate2.getFullYear();
const month = newDate2.getMonth();
const day = newDate2.getDate();
const hour = newDate2.getHours();
const minutes = newDate2.getMinutes();
const seconds = newDate2.getSeconds();
const dayOfWeek = newDate2.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);