class BubbleSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    const arr = this.array;
    let counter = 0;
    while (counter < arr.length) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(i, i + 1);
        }
      }
      counter++;
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
