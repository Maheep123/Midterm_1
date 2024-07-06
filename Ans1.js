function findMissingNumber(array, n) {
    const expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = array.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
  }

  console.log(findMissingNumber([5, 4, 1, 2], 5));
  console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10));
  console.log(findMissingNumber([2, 3, 1, 5], 5));
  console.log(findMissingNumber([1, 2, 3, 4, 5], 6));
  
