{

    // Asynchronous typescript
    const createPromise  = () : Promise<string> => {
        const data :string = "Ase bhai ase"
        return new Promise<string>((resolve,reject) => {
            try{
                if(data){
                    resolve(data)
                }
                else{
                    reject("Failed to fetch")
                }
            }
            catch(error){
                console.log(error);
            }
        })
    }

    const showData = async () =>{
       const data :string = await createPromise()
       return data
    }

    showData()

    interface User {
        userId:number,
        id:number,
        title: string,
        completed: boolean
    }

    const getTodo = async (param:number) : Promise<User> => {
        const url = `https://jsonplaceholder.typicode.com/todos/${param}`;

        const response = await fetch(url)
        const data = await response.json();
        return await data
    }

const res = getTodo(5)
console.log(res);





}