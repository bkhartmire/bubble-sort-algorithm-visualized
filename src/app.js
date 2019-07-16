/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./Sort");

// A link to our styles!
require("./index.css");

const bubbleSorter = new BubbleSort([12, 7, 10, 4, 2]);
const arr = bubbleSorter.array;
// let visualizationComplete = false;
// bubblesorter.sort();
const beginButton = document.getElementById("begin");
const restartButton = document.getElementById("restart");
const endButton = document.getElementById("end");
const iteration = document.getElementById("iteration");
let cycleInterval;

beginButton.addEventListener("click", () => {
  showEndRestartButtons();
  updateIteration();
  beginCycle();
  cycleInterval = setInterval(beginCycle, 1000);
});

endButton.addEventListener("click", endIllustration);
restartButton.addEventListener("click", restartIllustration);
//add red circles and arrows, etc.
//make sure numbers go back to original position after resetting, or finishing animation
//pick better numbers for array. these sort too fast
let i = 0;
let needToSwap = false;
let completedIterations = 0;

function showEndRestartButtons() {
  beginButton.style.display = "none";
  restartButton.style.display = "inline-block";
  endButton.style.display = "inline-block";
}

function showBeginButton() {
  beginButton.style.display = "inline-block";
  restartButton.style.display = "none";
  endButton.style.display = "none";
}

function updateIteration() {
  if (completedIterations < arr.length) {
    const string = "Iteration " + (completedIterations + 1);
    iteration.innerText = string;
  }
}

function restartIllustration() {
  clearInterval(cycleInterval);
  clearComparisonBox();
  reset();
  updateIteration();
  cycleInterval = setInterval(beginCycle, 1000);
}

function endIllustration() {
  clearInterval(cycleInterval);
  showBeginButton();
  clearComparisonBox();
  reset();
  iteration.innerText = "";
}

function reset() {
  i = 0;
  needToSwap = false;
  completedIterations = 0;
}

function beginCycle() {
  clearComparisonBox();
  if (needToSwap) {
    showSwap();
  }
  if (completedIterations === arr.length) {
    endIllustration();
  } else if (i < arr.length - 1) {
    showComparison();
    i++;
  } else {
    i = 0;
    completedIterations++;
    updateIteration();
  }
}

function clearComparisonBox() {
  if (i > 0) {
    document.getElementById("comparison").innerText = "";
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
  const string = `${item1} < ${item2}`;
  document.getElementById("comparison").innerText = string;
  if (item1 > item2) {
    needToSwap = true;
  }
}
