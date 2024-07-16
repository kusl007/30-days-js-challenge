//task 1;
for(let i=1;i<=10;i++){
    console.log(i)
}



//task2 multiplication table of 5
console.log("the multiplication table of 5 is given below : ")
for(let i=0;i<=10;i++){
    console.log(`5 * ${i} = ${5*i} `)
}



//task3 
let sum=0;
let i=1
while(i<=10){
    sum+=i;
    i++;
}
console.log("the sum of numbers from 1 to 10 is ",sum);


//task4
console.log(("the numbers from 10 to 1 is"))
let j=10;
while(j>=1){
    console.log(j)
    j--;
}


//task5
console.log("the  numbers from 1 to 5 are : ")
let k = 1;
do {
    console.log(k)
    k++;
    }
    while (k <= 5);



    //task6
    console.log("the  factorial of given number is : ")
    let num = 0;
    let fact =1;
    let l=1;
    if(num ==0){
        console.log("The factorial of 0 is 1")
    }
    else{
    do {
        fact*=l;
    l++;
    }
    while (l <= num);
    console.log(`the factorial of ${num} is ${fact}`)
}


//task7 

// *
// ** 
// ***
// ****
// *****

for (let m=1 ;m<=5;m++){
    let string=""
    for(let n=1;n<=m;n++){
        string+="* "
    }
    // console.log(string.trim());
    console.log(string);
}

//task8

console.log("numbers from 1 to 10 but skip 5")
 for(let y=1;y<=10;y++){
    if (y==5){
        continue;
    }
    console.log(y)
 }



 //task9    

 console.log("numbers from 1 to 10 but break on 7")
 for(let y=1;y<=10;y++){
    if (y==7){
        break;
    }
    console.log(y)
 }

