const BubbleSort = require("../src/BubbleSort");
const { expect } = require("chai");

describe("BubbleSort", () => {
  it("should be initialized with an array property", () => {
    const bubbleSort = new BubbleSort([1, 5, 3]);
    expect(bubbleSort.array).to.deep.equal([1, 5, 3]);
  });
  it("should have a sort function", () => {
    const bubbleSort = new BubbleSort([1, 5, 3]);
    expect(bubbleSort.sort).to.be.a("function");
  });
  it("should sort its array in ascending order", () => {
    const bubbleSort1 = new BubbleSort([1, 5, 3]);
    bubbleSort1.sort();
    expect(bubbleSort1.array).to.deep.equal([1, 3, 5]);
    const bubbleSort2 = new BubbleSort([12, 2, 6, 4, 8]);
    bubbleSort2.sort();
    expect(bubbleSort2.array).to.deep.equal([2, 4, 6, 8, 12]);
    const bubbleSort3 = new BubbleSort([9, 15, 1, 6]);
    bubbleSort3.sort();
    expect(bubbleSort3.array).to.deep.equal([1, 6, 9, 15]);
  });
});
