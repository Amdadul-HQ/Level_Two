{

// Ternary, optional chaining & nullish coalescing operator

// Ternary

    const age = 14
    const isAdult = age >=18 ? "Adult" : "Not Adult"

    // nullish coalescing operator
    // null or undefine er upor vitti kore decition make korte chaile nullish coalescing use korbo
    
    const isAuthonticate = null

    const result1 = isAuthonticate ?? "Guest"



    type User = {
        name:string,
        address: {
            city:string;
            permanentAddress:string;
            presentAddress?:string
        },
    }

    const user:User ={
        name:"Amdadul",
        address: {
            city:"Feni",
            permanentAddress:"Town",
            
        }
    }
    console.log(user.address.presentAddress?? "no present address");



}