function findKthPositive(arr, k) {
  let current = 1;
  let i = 0;

  while (k > 0) {
    if (i < arr.length && arr[i] === current) {
      i++; 
    } else {
      k--; 
      if (k === 0) return current;
    }
    current++;
  }
}

console.log(findKthPositive([2, 3, 7, 11], 5));
