class BubbleSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    const arr = this.array;
    let counter = 0;
    while (counter < arr.length) {
      for (let i = 0; i < arr.length - 1; i++) {
        const originalFirst = arr[i];
        const originalSecond = arr[i + 1];
        if (originalFirst > originalSecond) {
          arr[i] = originalSecond;
          arr[i + 1] = originalFirst;
        }
      }
      counter++;
    }
  }
}

module.exports = BubbleSort;
