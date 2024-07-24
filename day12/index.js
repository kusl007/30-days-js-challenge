//task 1
try {
    console.log("executing the function")
    functionThatNOtExist(); // not created, will give error
  } catch (error) {
    console.log(
      "Error while executing given function, check for it's availability"
    );
}


//task 2
const divideTwoNumbers = (numerator, denominator) => {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
  };
  
  try {
    const result = divideTwoNumbers(10, 0);
    console.log("Result:", result);
  } catch (error) {
    console.error(error.message);
  }


//task3
  let err = false;
try {
  if (err) {
    throw new Error("Error in try block");
  }
  console.log("Try executed");
} catch (error) {
  console.log(error.message);
} finally { // Always executes regardless of error or not
  console.log("Finally executed");
}



//task4
class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  const useOfCustomError = (isError) => {
    if (isError) {
      throw new MyError("Error using custom error class");
    } else {
      return "Everything fine";
    }
  };
  
  try {
    const result = useOfCustomError(true);
    console.log(result);
  } catch (error) {
    if (error instanceof MyError) {
      console.error("Custom Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
  }
  

  

  // Task 5
const isUserInputCorrect = (inputString) => {
    try {
      if (!inputString || inputString.trim() === "") {
        throw new MyError("Input string must not be empty");
      }
      console.log("Input string is correct");
      return true;
    } catch (error) {
      if (error instanceof MyError) {
        console.error("Custom Error::", error.message);
      } else {
        console.error("Unexpected Error::", error.message);
      }
    }
  };
  
  isUserInputCorrect("test");
  isUserInputCorrect("");

  
// Task 6
new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise failed to resolve");
    }, 2000);
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
  
  // Task 7
  const errorInAsyncAwait = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Promise failed to resolve in async function");
        }, 2000);
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  errorInAsyncAwait();


 

// Invalid URL
const InvalidURL = "https://not-a-valid-url.com";

// Task 8
fetch(InvalidURL)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP Error :: Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log("Data:", data))
  .catch((err) =>
    console.error(
      "Error while fetching data from given url, check it's correct or exists ::",
      err.message
    )
  );

// Task 9
const reqData = async () => {
  try {
    const res = await fetch(InvalidURL);
    if (!res.ok) {
      throw new Error(`HTTP Error :: Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(
      "Error while fetching data from given url, check it's correct or exists ::",
      error.message
    );
  }
};

reqData();