{
    type GenericType<T> = Array<T>
    // Generics Type
    const rollNumber : GenericType<number> = [123,34535,456546]
    // GenZ
    const rollNumber1 : GenericType<number> = [1233,45565656,56]

    const nameArray : GenericType<string> = ["Mr.x","Mr.y","Mr.y"];
    // GenZ
    const nameArray2 : GenericType<string> = ["adsfasd","asdfas","afdasd"]

    const boolArray :GenericType<boolean> = [true,false,true]
    // GenZ
    const boolArray2 : GenericType<boolean> = [true,false,true]

    interface User {
        name:string;
        age:number;
        role?:string
    }

    const users : GenericType<User> = [
        {
            name: "Amdadul",
            age:20
        },
        {
            name: "Amdadul",
            age:20
        },
        {
            name: "Amdadul",
            age:20
        },
        {
            name: "Amdadul",
            age:20
        }
    ]


}