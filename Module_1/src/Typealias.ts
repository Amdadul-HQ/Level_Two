{
// Type Alias

type Student = {
    name:string,
    roll:number,
    department:string,
    phone:number
}

const student : {
    name:string,
    roll:number,
    department:string,
    phone:number
} = {
    name:"Amdadul",
    roll:2,
    department:"CT",
    phone:223121
}
const student1 : Student = {
    name:"Amdadu",
    roll:1,
    department:"CT",
    phone:223121
}

console.log(student);
console.log(student1);

// function type alias

    type Add = (num1 : number,num2 :number) => number

    const add : Add = (num1,num2) => num1 + num2


}