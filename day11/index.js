// //task 1
// const messageAfter2Second = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Message after 2 seconds"), 2000);
//   });
//   messageAfter2Second.then((message) => console.log(message));

//   // Task 2
// const errMessageAfter2Second = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error Message after 2 seconds"), 2000);
//   });
//   errMessageAfter2Second.catch((err) => console.log(err));


//   // Task 3
// const fetchData = (message, delay) => {
//     return new Promise((resolve, reject) =>
//       setTimeout(() => {
//         console.log(message);
//         resolve(message);
//       }, delay)
//     );
//   };
  
//   fetchData("Data from server 1", 2000)
//     .then(() => {
//       fetchData("Data from server 2", 1000);
//     })
//     .then(() => {
//       fetchData("Data from server 3", 4000);
//     });



//     // Task 4
// const waitForPromiseResolve = async () => {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Promise fulfilled");
//       }, 3000);
//     });
//     console.log(result);
//   };
  
//   waitForPromiseResolve();
  
//   // Task 5
//   const waitForPromiseReject = async () => {
//     try {
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => reject("Promise failed"), 1400);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   waitForPromiseReject();

//   // Activity 4: Fetching Data from an API

// // Task 6
// fetch("https://api.github.com/users")
// .then((response) => {
//   return response.json();
// })
// .then((parsedData) => console.log(parsedData))
// .catch((err) => console.error(err));

// // Task 7
// const DataFetch = async () => {
// try {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
// };
// DataFetch();

// Activity 5: Concurrent Promises

// Task 8
const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 2000)
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 1000)
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 2200)
  );
  const promise4 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 4 resolved"), 400)
  );
  
  Promise.all([promise1, promise2, promise3, promise4])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
  
  // Task 9
  Promise.race([promise1, promise2, promise3, promise4]).then((result) =>
    console.log("i am first in promise race ",result)
  );