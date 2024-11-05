{

// number Type
const age:number = 25;
// String Type
const myName:string = "Rimon"
// Boolean Type
const isActive: boolean = true
// Array string
const numbers : number[] = [1,2,3,4,5]
// Tuple
const info : [string,boolean,number,object,[string,number]] = ["Rimon",true,2,{name:"rimon"},["rimon",231]]

// object

interface Person {
    name:string,
    age:number,
    isActive:boolean,
    designation:string,
    company:string,
    salary?:number // Optional Type
}

const person : Person = {
    name:"Amdadul Haque",
    age:21,
    isActive:true,
    designation:"Next Level Developer",
    company:"Programming hero"
}

// Normal function & arrow function

interface Multiply {
    (num1:number,num2:number):number
}
// function multiply (num1:number,num2:number):number{
//     return num1 * num2
// }

const multiply:Multiply = (num1,num2) => num1 * num2


// Spread Operator

const rolls :number[] = [1,2,3,4,5,6,7,8,9,10]

const newRolls :number[] = [...rolls,11,12]


// Optional Type

const person1 :Person = {
    name:"Amdadul",
    age:21,
    isActive:true,
    company:"Monster studio",
    designation:"Front End Developer"
}

// Rest Operator
const[first,...bakiEmement] = rolls;




}