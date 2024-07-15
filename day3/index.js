//task 1

let num1=-1;


if (num1>0){
    console.log("the given number is positive")
} else if(num1==0) {
    console.log("the given number is zero")
}else {
    console.log("the given number is negative")

}



//task2
age=19;
if(age>18){
    console.log("Congratulations you are eligible to vote")
}
else{
    console.log("You are not eligible for voting")
}


//task3
let first=5;
let second=4;
let third=3;
if(first>second){
    if(first>third){
        console.log(`${first} is largest`)
    }
    
}
else if(third>second){
    console.log(`${third} is largest`)

}
else{
    console.log(`${second } is largest`)
}


//task4 
switch(7) {
    case 1:
     console.log("sunday")
      break;
    case 2:
     console.log("monday")
      break;
    case 3:
     console.log("tuesday")
      break;
    case 4:
     console.log("wednesday")
      break;
    case 5:
     console.log("thursday")
      break;
    case 6:
     console.log("friday")
      break;
    case 7:
     console.log("saturday")
      break;
    
    default:
      console.log("enter a valid number")
  }


  //task5

  let grade =100;
  if (grade>100|| grade<0){
    console.log("enter a valid grade")
  }
  else{
  switch((grade-grade%10)/10) {
    case 10:
        console.log("full marks A+");
        break;
    case 9:
     console.log("A")
      break;
    case 8:
     console.log("B")
      break;
    case 7:
     console.log("C")
      break;
    case 6:
     console.log("D")
      break;
    case 5:
     console.log("E")
      break;
    case 4:
     console.log("F")
      break;
    
    
    
    default:
      console.log("Fail")
  }
}



//task 6

let givenNum=0;

givenNum%2==0? console.log(`the given number ${givenNum} is even` ): console.log(`the given number ${givenNum} is odd`)




//task 7
let year= 400;

if (
    year % 100 == 0 ? year % 400 == 0 : year % 4 == 0
)
    console.log(" Input year:", year, "is a Leap Year");
else
    console.log(
        " Input year:",
        year,
        "is NOT a Leap Year"
    );