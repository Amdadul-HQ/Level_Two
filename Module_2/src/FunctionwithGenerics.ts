{
    // Function with Generics

    const createArray = (params: string) : string[] =>{
        return [params]
    }    

    // Function with Generics
    const createArrayWithGenerics = <T>(params: T) : Array<T> =>{
        return [params]
    }

    const res = createArrayWithGenerics<string>("Bangladesh")

    interface User {
        name:string;
        age:number
    }

    const res1 = createArrayWithGenerics<User>({name:"Amdadul",age:21});

    // Create array with tuple

    const createArrayWithTuple = <T,Q>(param1: T,param2: Q) : [T,Q] =>{
        return[param1,param2]
    }

    const res11 = createArrayWithTuple<string,number>("bangladesh",50)

    interface User1{
        name:string,
        age:20
    }

    const res10 = createArrayWithTuple<User1,string>({name:"Amdadul",age:20},"sdfasdfasdf")

    const addCoursesToStudes = <T>(student: T)  =>{
        const course = "Next Level Web Developer";
        return {...student,course};
    }

    addCoursesToStudes<{name:string;id:number}>({name:"adasdf",id:5555})
    



}