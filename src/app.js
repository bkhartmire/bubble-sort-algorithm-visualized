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
  if (i > 0) {
    const previousBoxId = `box${i}`;
    clearComparisonBox(previousBoxId);
  }
  if (needToSwap) {
    showSwap(i - 1, i);
    needToSwap = false;
  }
  if (i < arr.length - 1) {
    const boxId = "box" + (i + 1);
    showComparison(i, i + 1, boxId);
    i++;
  } else if (completedIterations < arr.length) {
    i = 0;
    completedIterations++;
    showIteration();
  } else {
    clearInterval(cycleInterval);
  }
}

function showIteration() {
  if (completedIterations < arr.length) {
    const element = document.getElementById("iteration");
    const string = "Iteration " + (completedIterations + 1);
    element.innerText = string;
  }
}

function showComparison(index1, index2, boxId) {
  const item1 = arr[index1];
  const item2 = arr[index2];
  const box = document.getElementById(boxId);
  const string = `${item1} < ${item2}`;
  box.innerHTML = "<h1>" + string + "</h1>";
  if (item1 > item2) {
    needToSwap = true;
  }
}

function showSwap(index1, index2) {
  const firstId = `item${index1}`;
  const secondId = `item${index2}`;
  document.getElementById(firstId).innerText = arr[index2];
  document.getElementById(secondId).innerText = arr[index1];
  bubbleSorter.swap(index1, index2);
}

function clearComparisonBox(boxId) {
  const box = document.getElementById(boxId);
  box.innerText = "";
}
