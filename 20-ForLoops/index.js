/**
 * for loop = repeat some code a limited amount of times.
 */

for(let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("=========")

for(let i = 0; i <= 20; i++) {
  if (i === 13) {
    continue;
  } else {
    console.log(i);
  }
}
console.log("=========")

for(let i = 0; i <= 20; i++) {
  if (i === 13) {
    break;
  } else {
    console.log(i);
  }
}
console.log("=========")