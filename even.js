function getEvenNumbers(arr)
 {
    return arr.filter(function(number) 
    {
      return number % 2 === 0;
    });
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
    