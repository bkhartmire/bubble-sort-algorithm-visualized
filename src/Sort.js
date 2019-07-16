class BubbleSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    //using boolean values and recursion
    const arr = this.array;
    for (let counter = 0; counter < arr.length; counter++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
  }

  swap(index1, index2) {
    const arr = this.array;
    const originalFirst = arr[index1];
    const originalSecond = arr[index2];
    arr[index1] = originalSecond;
    arr[index2] = originalFirst;
  }
}

module.exports = BubbleSort;
