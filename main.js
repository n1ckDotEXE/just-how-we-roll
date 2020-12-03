/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// Single Dice
const d6Button = document.querySelector("#d6-button");
const d6Roll = document.querySelector("#d6-roll");
const d6RollsMean = document.querySelector("#d6-rolls-mean");
const d6RollsMedian = document.querySelector("#d6-rolls-median");
const d6RollsMode = document.querySelector("#d6-rolls-mode");

d6Roll.src = 'images/start/d6.png';

// Double Dice
const doubleD6Buttons = document.querySelector("#double-d6-buttons");
const doubleD6Roll1 = document.querySelector("#double-d6-roll-1");
const doubleD6Roll2 = document.querySelector("#double-d6-roll-2");
const doubleD6RollsMean = document.querySelector("#double-d6-rolls-mean");
const doubleD6RollsMedian = document.querySelector("#double-d6-rolls-median");
const doubleD6RollsMode = document.querySelector("#double-d6-rolls-mode");

doubleD6Roll1.src = 'images/start/d6.png';
doubleD6Roll2.src = 'images/start/d6.png';

// 12 Sided Dice
const d12Button = document.querySelector("#d12-button");
const d12Roll = document.querySelector("#d12-roll");
const d12RollsMean = document.querySelector("#d12-rolls-mean");
const d12RollsMedian = document.querySelector("#d12-rolls-median");
const d12RollsMode = document.querySelector("#d12-rolls-mode");

d12Roll.src = "images/start/d12.jpeg";

// 20 Sided Dice
const d20Button = document.querySelector("#d20-button");
const d20Roll = document.querySelector("#d20-roll");
const d20RollsMean = document.querySelector("#d20-rolls-mean");
const d20RollsMedian = document.querySelector("#d20-rolls-median");
const d20RollsMode = document.querySelector("#d20-rolls-mode");

d20Roll.src = "images/start/d20.jpg";

/*******************
 * EVENT LISTENERS *
 *******************/

// Single Dice
const d6Array = [];

d6Button.addEventListener('click', () => {
  const random = getRandomNumber(6);
  d6Array.push(random);

});

// Double Dice
const doubleD6Array = [];

doubleD6Buttons.addEventListener('click', () => {
  const random1 = getRandomNumber(6);
  const random2 = getRandomNumber(6);
  doubleD6Array.push(random1);
  doubleD6Array.push(random2);

});

// 12 Sided Dice
const d12Array = [];

d12Button.addEventListener('click', () => {
  const random = getRandomNumber(12);
  d12Array.push(random);

});

// 20 Sided Dice
const d20Array = [];

d20Button.addEventListener('click', () => {
  const random = getRandomNumber(20);
  d20Array.push(random);

});

/******************
 * RESET FUNCTION *
 ******************/

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

/****************
 * MATH SECTION *
 ****************/

// Mean
function calcMean(input) {
  let sum = 0;

  for (const num of input) {
    sum += num;
  }
  
  return sum/input;
}

function calcMedian(input) {
  let median = 0;
}

function calcMode(input) {
  let mode = 0;
}