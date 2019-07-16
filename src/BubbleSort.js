class BubbleSort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    let changesMade = false;
    const arr = this.array;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        this.swap(i, i + 1);
        changesMade = true;
      }
    }
    if (changesMade) {
      this.sort();
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
