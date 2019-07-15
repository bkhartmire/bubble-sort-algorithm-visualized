/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./Sort");

// A link to our styles!
require("./index.css");

const bubbleSorter = new BubbleSort([12, 2, 6, 4, 8]);
const arr = bubbleSorter.array;
// let visualizationComplete = false;
// bubblesorter.sort();
const button = document.getElementById("begin");
let cycleInterval;

button.addEventListener("click", () => {
  showIteration();
  beginCycle();
  cycleInterval = setInterval(beginCycle, 3000);
});

let i = 0;
let needToSwap = false;
let completedIterations = 0;

function beginCycle() {
  clearComparisonBox();
  if (needToSwap) {
    showSwap();
  }
  if (i < arr.length - 1) {
    showComparison();
    i++;
  } else if (completedIterations < arr.length) {
    i = 0;
    completedIterations++;
    showIteration();
  } else {
    clearInterval(cycleInterval);
  }
}

function clearComparisonBox() {
  if (i > 0) {
    const boxId = `box${i}`;
    const box = document.getElementById(boxId);
    box.innerText = "";
  }
}

function showSwap() {
  const firstId = `item${i - 1}`;
  const secondId = `item${i}`;
  document.getElementById(firstId).innerText = arr[i];
  document.getElementById(secondId).innerText = arr[i - 1];
  bubbleSorter.swap(i - 1, i);
  needToSwap = false;
}

function showComparison() {
  const item1 = arr[i];
  const item2 = arr[i + 1];
  const boxId = "box" + (i + 1);
  const string = `${item1} < ${item2}`;
  document.getElementById(boxId).innerHTML = "<h1>" + string + "</h1>";
  if (item1 > item2) {
    needToSwap = true;
  }
}

function showIteration() {
  if (completedIterations < arr.length) {
    const element = document.getElementById("iteration");
    const string = "Iteration " + (completedIterations + 1);
    element.innerText = string;
  }
}
