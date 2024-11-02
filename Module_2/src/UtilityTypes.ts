{
//  Utility types

type Person = {
    name: string,
    age:number,
    email?:string,
    contact:string
}

// Pick

type All = Pick<Person,keyof Person>


// Omit 
type Contact = Omit<Person,"name" | "age">

// Required

type Require = Required<Person>


// partial

}