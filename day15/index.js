//task 1
function outerFunction() {
   console.log("i am in the outer function")
   const hello="Hello"
    function innerFunction() {
      console.log(hello,"i am inside the inner function");
    }
  
    return innerFunction;
  }
  
  const innerFunc = outerFunction();
  innerFunc(); 



  //task2
  function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    function getValue() {
      return count;
    }
  
    return {
      increment,
      getValue
    };
  }
  
  const counter = createCounter();
  
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); 


  //task3
  function createIdGenerator() {
    let idCounter = 0;
  
    return function generateId() {
      return ++idCounter;
    };
  }
  
  const generateUniqueId = createIdGenerator();
  
  console.log(generateUniqueId()); // Output: 1
  console.log(generateUniqueId()); // Output: 2
  console.log(generateUniqueId()); // Output: 3

  

  //task4
  
  function createGreeter(name) {
    return function greet() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetJohn = createGreeter("John");
  const greetAlice = createGreeter("Alice");
  
  greetJohn(); 
  greetAlice(); 


  //task5
  const functionsArray = [];

for (let i = 0; i < 5; i++) {
  functionsArray.push(() => {
    console.log(i);
  });
}

functionsArray[0](); 
functionsArray[1](); 
functionsArray[2](); 
functionsArray[3](); 
functionsArray[4](); 



//task6
function createItemManager() {
    const items = [];
  
    function addItem(item) {
      items.push(item);
    }
  
    function removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    }
  
    function listItems() {
      return items.slice(); // Return a copy of the items array
    }
  
    return {
      addItem,
      removeItem,
      listItems
    };
  }
  
  const manager = createItemManager();
  
  manager.addItem('item1');
  manager.addItem('item2');
  manager.addItem('item3');
  
  console.log(manager.listItems()); // Output: ['item1', 'item2', 'item3']
  
  manager.removeItem('item2');
  console.log(manager.listItems()); // Output: ['item1', 'item3']

  
  //task7
  function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (key in cache) {
        return cache[key];
      }
  
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  // Example usage:
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); // Output: 120
  console.log(memoizedFactorial(5)); // Output: 120 (cached result)
  

  

  //task 8
  function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorials = memoize(factorial);
  
  console.log(memoizedFactorials(5)); // Output: 120
  console.log(memoizedFactorials(5)); // Output: 120 (cached result)
  