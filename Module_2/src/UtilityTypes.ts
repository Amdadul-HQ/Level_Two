{
//  Utility types

type Person = {
    name: string,
    age:number,
    email:string
}

// Pick

type All = Pick<Person,keyof Person>


}