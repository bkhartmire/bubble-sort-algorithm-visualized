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
let visualizationComplete = false;
// bubblesorter.sort();

// showComparison(12, 2, "box1");
const interval = setInterval(beginCycle, 2000);

let i = 0;
function beginCycle() {
  if (i < arr.length - 1) {
    const boxId = "box" + (i + 1);
    showComparison(i, i + 1, boxId);
    i++;
  } else {
    clearInterval(interval);
    visualizationComplete = true;
    i = 0;
  }
}

function showComparison(index1, index2, boxId) {
  const item1 = arr[index1];
  const item2 = arr[index2];
  const box = document.getElementById(boxId);
  const string = `${item1} < ${item2}`;
  box.innerHTML = "<h1>" + string + "</h1>";
  if (item1 > item2) {
  }
  bubbleSorter.swap(index1, index2);
}

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle("Re-Engineer Yourself");
// document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
// function changeTitle(event) {
//   event.preventDefault();
//   console.log("What is an event?", event);
// }

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });
