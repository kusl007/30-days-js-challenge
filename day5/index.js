    //task 1
    function checkEvenOrOdd( num){
             num%2==0? console.log("The number is Even"): console.log("The number is odd")
    }


    //task2
    function calculateSquare(num){
        console.log(`the square of ${num} is ${num*num}`);
    }

    //task 3
    function findMaxOfTwoNumbers( num1 ,num2){
        num1>num2?console.log(`${num1} is greater than ${num2}`): console.log(`${num2} is greater than ${num1}`)

    }

    //task4
    function concatenateTwoStrings(str1,str2){
       return str1 + " " +str2;
    }


    //arrow functions
    //task5
    const sumOfTwoNumbers=(num1,num2)=>{
        return num1+num2
    }

    //task6
    const checkSpecialChars=(string)=>{
        let specialChar=["!","@","#","$","%","^","&","*","(",")",",",".","?",":","{","}","|","<",">",];
        for(let char of string){
            // console.log(char,string)
            
           if (specialChar.includes(char)){
            // console.log(char ,specialChar)
            return true;
           }
        }
        return false;
    }

    //Default parameters
    //task7
    function findProduct(num1,num2=1){
        return num1*num2;
    }
    

    //task8
    function GreetingMessage(name,age=10){
        console.log(`Hello ${name} ! Good Morning`)
        age<18?console.log( `Sorry you are not eligible to vote`):console.log(`You are eligible to vote`)
    }

    //Higher order Functions
    //task9
    function HigherOrderFunc(num){
        
        if (num>0){
            console.log(  `the number of function execution is ${num} times`)
            HigherOrderFunc(num-1)
        }
    }

    //task10
    function hOF(fn1, fn2, val) {
        return fn2(fn1(val));
    }

    checkEvenOrOdd(3)

    calculateSquare(9)

    findMaxOfTwoNumbers(-9,-1)

    let result=concatenateTwoStrings("kushal","Bansal")
    console.log(result)

    console.log("the sum of two numbers is =>",sumOfTwoNumbers(3,4))

    let specialChars=checkSpecialChars("apple")
    specialChars?console.log("Yes it contains the special character"):console.log(("No it doesnot contain the special character"))

    console.log("the final product is =>" ,findProduct(3,3))

    GreetingMessage("kushal",18)
    HigherOrderFunc(13)

    
    console.log(hOF(calculateSquare, checkEvenOrOdd, 7));
    console.log(hOF(calculateSquare, checkEvenOrOdd, 8));






