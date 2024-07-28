//task 1
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  console.log(factorial(0))
//   console.log(factorial(1))
//   console.log(factorial(2))
//   console.log(factorial(3))
 

  //task 2
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log(fibonacci(0))
//   console.log(fibonacci(1))
//   console.log(fibonacci(2))
//   console.log(fibonacci(3))


//task3
function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumArray(arr.slice(1));
    }
  }
  
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [10, 20, 30];
  const arr3 = [];
  
  console.log(sumArray(arr1)); 
//   console.log(sumArray(arr2)); 
//   console.log(sumArray(arr3));


//task4

  