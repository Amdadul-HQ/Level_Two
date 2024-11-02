{
    // Generics with Key of
    type Owner  = {
        bike:string;
        car: string,
        ship:string,
    }
    type Owner1 = keyof Owner

    const person :Owner1 = "bike";

    const user = {
        name: "Amdadul",
        age:25,
        email:"rimon.intern@gmail.com"
    }
    interface User {
        name:string,
        age:number,
        email:string
    }

    const getProperty = <T,Y extends keyof T>(obj:T,key:Y) => {
        return obj[key]
    }

    console.log(getProperty(user,"email"));




}