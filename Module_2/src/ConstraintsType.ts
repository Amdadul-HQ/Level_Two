{
// Constraints in typescript

interface Common {
    name:string,
    email:string,
    id:number
}


const createStudes = <T extends Common>(student: T) => {
    const course = "Next Level Course"
    return {...student,course}
}

// const createStudents = 

interface CreateStudents {
    <T extends Common>(student:T) : object
}

const createStudents : CreateStudents = (student) =>{
    
     const course = "Next Level Course"

    return {...student,course}

}

const student1 = {
    name:"Amdadul",email:"@gmailcom",id:132,role:"Admin"
}

 
const res111 = createStudents<{name:string,email:string,id:number,role:string}>(student1)

console.log(res111);






    
}