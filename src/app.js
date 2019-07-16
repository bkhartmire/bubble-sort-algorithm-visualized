const BubbleSort = require("./Sort");

require("./index.css");

const bubbleSorter = new BubbleSort([12, 7, 10, 4, 2]);
let arr = bubbleSorter.array;
// const original = [...arr];

const beginButton = document.getElementById("begin");
// const restartButton = document.getElementById("restart");
const iteration = document.getElementById("iteration");

let cycleInterval;

beginButton.addEventListener("click", () => {
  // showRestartButton();
  beginButton.style.display = "none";
  updateIteration();
  beginCycle();
  cycleInterval = setInterval(beginCycle, 1000);
});

// restartButton.addEventListener("click", restart);
//restart isn't working...

// function showRestartButton() {
//   beginButton.style.display = "none";
//   restartButton.style.display = "inline-block";
// }

function updateIteration() {
  if (completedIterations < arr.length) {
    const string = "Iteration " + (completedIterations + 1);
    iteration.innerText = string;
    changesMade = false;
  }
}

let i = 0;
let needToSwap = false;
let completedIterations = 0;
let changesMade = false;

function beginCycle() {
  clearComparisonBox();
  if (needToSwap) {
    showSwap();
    changesMade = true;
  }
  if (i < arr.length - 1) {
    showComparison();
    i++;
  } else if (i === arr.length - 1 && !changesMade) {
    removeUnderlines();
    clearInterval(cycleInterval);
  } else {
    removeUnderlines();
    i = 0;
    completedIterations++;
    updateIteration();
  }
}

function clearComparisonBox() {
  if (i > 0) {
    document.getElementById("comparison").innerText = "";
    document.getElementById(`arrow${i}`).innerHTML = "";
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
  addUnderline();
  const item1 = arr[i];
  const item2 = arr[i + 1];
  const comparison = document.getElementById("comparison");
  const string = `${item1} < ${item2}`;
  comparison.innerText = string;
  if (item1 > item2) {
    comparison.style.textDecoration = "line-through rgba(255, 0, 0, 0.5)";
    needToSwap = true;
    const arrow = document.getElementById(`arrow${i + 1}`);
    arrow.innerHTML = "&#8596;";
  } else {
    comparison.style.textDecoration = "none";
  }
}

function addUnderline() {
  if (i > 0) {
    const previousElement = document.getElementById(`item${i - 1}`);
    previousElement.classList.remove("underline");
  }
  const element1 = document.getElementById(`item${i}`);
  const element2 = document.getElementById(`item${i + 1}`);
  element1.className = "underline";
  element2.className = "underline";
}

function removeUnderlines() {
  const element1 = document.getElementById(`item${i}`);
  const element2 = document.getElementById(`item${i - 1}`);
  element1.classList.remove("underline");
  element2.classList.remove("underline");
}

// function restart() {
//   clearInterval(cycleInterval);
//   clearComparisonBox();
//   removeUnderlines();
//   i = 0;
//   needToSwap = false;
//   completedIterations = 0;
//   changesMade = false;
//   for (let index = 0; index < original.length; index++) {
//     const h1Id = "item" + index;
//     document.getElementById(h1Id).innerHTML = original[index];
//   }
//   arr = [...original];
//   console.log('arr: ', arr);
//   updateIteration();
//   beginCycle();
//   cycleInterval = setInterval(beginCycle, 1000);
// }
