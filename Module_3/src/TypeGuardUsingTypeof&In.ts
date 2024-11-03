{


    type DynamicType = string | number;

    const add = (param1:DynamicType ,param2:DynamicType) : DynamicType => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        }
        else {
           
           return param1.toString() + param2.toString()
        }
    }

    console.log(add(1,2));
    console.log(add("1","5"));

    type NormalUser = {
        name:string
    }
    type  AdminUSer ={
        name:string,
        role: "admin"
    }

    const getUser = (param: NormalUser | AdminUSer) =>{
        if("role" in param){
            console.log(`My name is ${param.name}.I am a ${param.role}`);
        }
        else{
            console.log(`My name is ${param.name}. I am a User`);
        }
    }

    getUser({name:"Amdadul",role:"admin"})



}