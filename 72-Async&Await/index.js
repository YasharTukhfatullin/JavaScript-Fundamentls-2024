/**
 * Async/Await = Async = makes a function return a promise 
 *               Await = makes a async function wait for a promise
 * 
 *               Allows you write asynchronous code in a synchronous manner
 *               Async doesn't have resolve or reject parameters
 *               Everything after Await is placed in an event queue
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

// Async/Await functions
async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult)
  
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
  
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  
    console.log("You finished all the chores");
  }

  catch(error) {
    console.error(error);
  }
};

doChores();

