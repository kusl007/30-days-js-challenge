//task 1
let obj1={
    title:"Think and Grow Rich",
    author:"Napoleon Hill",
    year:"1937"
}

console.log(obj1)


//task 2
let author=obj1.author
let title=obj1.title
console.log(`the title of book is ${title}  and the author of book  is ${author} `)

//task3
let print = ()=>{
    console.log(`the title of book is ${obj1.title}  and the author of book  is ${obj1.author}  and year is ${obj1.year}`)
}
obj1.output= print
obj1.output();

//task4
let updateYear=(year)=>{
    obj1.year=year
}

obj1.year=updateYear;
 
updateYear(2020)
console.log(obj1)


//task5
const library = {
    name: "Central Library",
    books: [
      { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
      { title: "Pride and Prejudice", author: "Jane Austen" },
    ],
  };
  
  console.log(library);


  //task6
console.log("Library Name:", library.name);

// Accessing and logging book titles
library.books.forEach((book) => console.log("Book Title:", book.title));


//task7
library.books.forEach((book) => {
    book.getTitleAndYear = function() {
      return `${this.title} (${this.year})`;
    };
  });
  
  // Call the method and log the results
  library.books.forEach((book) => console.log(book.getTitleAndYear()));


  //task8
  const book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
  };
  
  for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }


  //task9
  const bookKeys = Object.keys(book);
console.log("Book Keys:", bookKeys); 

// Get all book object values
const bookValues = Object.values(book);
console.log("Book Values:", bookValues); 