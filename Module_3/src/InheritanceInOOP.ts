{


    class Common {
        name:string;
        age: number;
        address:string
        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHour:number){
            console.log(`${this.name} Sleep every day ${numberOfHour} Hour`);
        }
    }



    class Student extends Common {
        constructor(name:string,age:number,address:string){
            super(name,age,address)
        }
    }

    const student = new Student("amdadul",20,"Feni")

    // console.log(student.age);
    // student.getSleep(20)

    class Teacher extends Common {
        
        post:string
        constructor(name:string,age:number,address:string,post:string){
            super(name,age,address)
            this.post = post;
        }
        getPromotion(param : string){
            console.log(`${this.name} is promoted ${this.post} to ${param}`);
        }
    }

    const teacher = new Teacher("Amdadul",25,"Feni","Front End Developer")

    // teacher.getPromotion("Full stack Developer")
    teacher.getSleep(7)
    teacher.getPromotion("DevOps")




}