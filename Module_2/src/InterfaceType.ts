{
// Inter Face Type
    interface User {
        name: string;
        roll: number;
        age: number;
        address:string;
    }

    type User1 = {
        name:string;
        age:number
    }

    
    interface ExtandsUser {
        role:string;
    }
    type Person1 = User1 & ExtandsUser

    const person1 :Person1 = {
        name:"Amdadul",
        age:2,
        role:"admin",
    }

    const user1 :User = {
        name:"Amdadul",
        roll:1,
        age:20,
        address:"Feni"
    }

    interface Person extends User {role: string}
    const person :Person = {
        name: "Rimon",
        roll:1,
        age:3,
        address:"feni",
        role:"Developer"
    }
    type NumberArray = number[]

    const roll1 :NumberArray = [123,454,545] // Index value are in Number
                            //  0   1   2 => Index are in Number format
    // Array InterFace 



    interface NumberArray1 {
        [index : number] :number //< This number for value
        //         ^
        //This Number is for Index
    }
    


}