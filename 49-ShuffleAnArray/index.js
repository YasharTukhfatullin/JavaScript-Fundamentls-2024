/**
 * Shuffle An Array
 * 
 * For shuffling cards DO NOT use sort() Algorithm. Instead use Fisher-Yates Algorithm

 */

const cards = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

// Instead use Fisher-Yates Algorithm

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]]; // destructuring

  }
};

shuffle(cards);

console.log(cards);