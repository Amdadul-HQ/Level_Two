{
    // Task 3: Object Types, Type Alias, & Literal Types
    // Objective: Define a structured Person object using Type Aliases.
    
    // Instructions:
    
    // Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
    
    type Person = {
        name:string;
        address:{
            city:string,
            country:string,
        },
        color:{
            hair:"black" | "white",
            eye: "black" | "brown",
        },
        income: number,
        expense:number,
        hobbies: string[],
        familyMembers : number,
        job: "IT" | "NON IT",
        readonly relationShip: "single",
        friends: string[] 
    }



}