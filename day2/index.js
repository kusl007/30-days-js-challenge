
let num1=9;
let num2=5;

// task 1
console.log("the sum of two numbers is => ",num1 + num2)

// task2
console.log("the difference of two numbers is => ",num1 - num2)
// console.log(`the difference of two numbers is => ${num1 - num2}`)



//task 3
console.log("the multiplication of two numbers is => ",num1 * num2)


//task 4
console.log("the division of two numbers is => ",num1 /num2)

//task 5
console.log("the remainder of two numbers after division is => ",num1 % num2)


//task 6

 let sum=0;
//  console.log(typeof(sum))
sum+=num1;
console.log("the value of sum is =>",sum)

//task7
let difference=0;
difference-=num1
console.log("the value of difference is =>",difference)



// task 8
num1>num2?console.log(`${num1} is greater than ${num2}` ): console.log(`${num2} is greater than ${num1}` )
//similar to the case of < operator

//task 9
let first_num=5;
let second_num=6;
let third_num=6;

if(first_num>=second_num){
    console.log("first number is greater or equal to  second number i.e " , first_num ,">=",second_num)
}
if(first_num<=second_num){
    console.log("first number is less or equal to  second number i.e " , first_num ,"<=",second_num)
}



//task 10
let first =10;
let second="10";
if (first==second){
    console.log("both are same in value")
}else{
    console.log("both values are not same")
}
 if (first === second){
    console.log("both are equal and of same type")
 }else{
    console.log("not equal or not of same type or maybe both not same type and value")
 }




//task11
//&& operater is basically and operator that gives true value when all inputs are true and false if single input is false  it checks till last value
let value1= 10 && "ram";
let value2= 10 && "ram" && 0;
console.log("the output of all positive value is => ",value1);
console.log("the output of all positive value and single negative value  is => ",value2);




//task 12
// || operater is basically and operator that gives true value when singleof its inputs are true and false if all input values are false  it checks till last value
let value3= 10 || "ram"||0;
let value4= null||undefined||false;
//null and undefined are falsey value and they are considered as 0
console.log("the output of  positive value is => ",value3);
console.log("the output of all negative value and single negative value  is => ",value2);



//task13
// ! is a negation operator it helps to invert the value;

let a=true;
// let a=5;// any nunmber is also said to be true or truthy value
console.log(`the opposite of ${a} is ${!a}`)



//task 14
let number =-1;
if (number===0){
    console.log(`${number} is neither positive nor negative its zero` )
}
else{
number>0?
console.log(`${number} is positive`):
console.log(`${number} is negative`)
}


