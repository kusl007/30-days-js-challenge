//task1 
console.log("task1")
let arr1=[1,2,3,4,5]
for(let i=0; i<5;i++){
    console.log(arr1[i])
}

//task2
console.log("task2")

console.log(arr1[0])
console.log(arr1[4])

//task3 
console.log("task3")

arr1.push(6);
for(let i=0; i<6;i++){
    console.log(arr1[i])
}


//task4
console.log("task4")

arr1.pop();
for(let i=0; i<6;i++){
    console.log(arr1[i])
}


//task5
const firstElement = arr1.shift()
console.log(arr1);

console.log(firstElement);


//task6
console.log(arr1.unshift(6,7));

console.log(arr1);

//task7
arr1.map((item,key)=>{
    console.log("i am inside map",2*item)
})

//task8 
arr1.filter((item)=>{
    item%2==0 && console.log(item)
})

//task9

let sum=arr1.reduce(getSum, 0);
function getSum(total, num) {
    return total + Math.round(num);
  }


console.log("the sum is",sum)


//task 10
for(let i=0; i<5;i++){
    console.log(arr1[i])
}

//task11
arr1.forEach((item)=>{
    console.log("uisng ForEach",item)
})

//task12    
let TwoDArray=[[1,2,3],[4,5,6],[7,8,9]];
console.log(TwoDArray)

//task13
console.log(TwoDArray[1][1])