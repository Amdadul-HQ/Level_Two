{
    // Task 2: Functions, Optional, and Literal Types
    // Objective: Create a function with parameters and an optional literal type.
    
    // Instructions:
    
    // Define a function that takes:
    // name (string)
    // age (number)
    // role (optional, with type 'admin' | 'user' | 'guest')
    // The function should log these values or perform a basic action.

    type Role = "admin" | "user" | "guest"

    interface User {
        name:string,
        age:number,
        role?:"admin" | "user" | "gust",
    }

    type IFunction = (param:User) => Array<User>


    const user  = {
        name:"Amdadul",
        age:21,
        role: "admin"
    }

    interface IFunctionType {
        (param :User) : User[]
    }

    const userFunction: IFunctionType = (param) => [param]

    console.log(userFunction(user));


}