function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        console.log(array);
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
        // method2
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    console.log(array);
  }
}

bubbleSort([102, 78, 5, 26, 8, 300, 1, 3, 36, 45, 12, 18, 19, 95, 99]);

// easy way to sort
