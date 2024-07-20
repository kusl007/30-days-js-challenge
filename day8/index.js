//task 1
 let name ="kushal"
 let age=22;
 console.log(`Hello ${name} you are ${age} years old `)

 //task2
 console.log(`line 1
line2`)


//task3
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log("First Number:", first);
console.log("Second Number:", second);
console.log("Rest of the Numbers:", rest);

//task4
const person = {
    firstName: "kushal",
    lastName: "bansal",
    age: 22,
    occupation: "Software Engineer"
  };
  
  const { firstName, lastName } = person;
  
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);

//task5
let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log("The array using sptread operator and adding other values is",arr2)


//task6
function sum(...values) {
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  
  console.log(sum(1, 2, 3, 4));


  //task7
  const product=(num1,num2=1)=>{
    console.log("The product is ", num1*num2)
  }
  product(2,2)
  product(2)

  //task8
  const myObject = {
    name: "My Object", 
    greet() { // Method (function as a property)
      console.log("Hello from", this.name); // Using 'this' keyword to access object property
    }
  };
  
  console.log(myObject); 
  myObject.greet();

  //task9


  const person2 = {
    firstName: "Alice",
    lastName: "Smith",
    greet() {
      console.log("Hello from", this.firstName + " " + this.lastName);
    }
  };
  
  // Using a variable to create a computed property name
  const age2 = 30;
  person2["age"] = age2;
  
  console.log(person2);
  person2.greet();