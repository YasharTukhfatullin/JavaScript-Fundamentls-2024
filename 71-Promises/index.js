/**
 * Promise = An object that menages asynchronous operations.
 *           Wrap a Promise Object around {asynchronous code}.
 *           "I promise to return a value"
 *           PENDING -> RESOLVED or REJECTED
 *           new Promise((resolve, reject) => {asynchronous code})
 * */

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog.");
      } else {
        reject("You did not walked the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 3000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("You take out the trash.");
      } else {
        reject("You didn't take out the trash.");
      }
    }, 800);
  });
}

// Method chaining with Promises
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chore");
  })
  .catch(error => console.error(error));
