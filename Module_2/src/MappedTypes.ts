{
// Mapped types
 const arrayOfNumber = [1,2,45,67]

//  const arrayOfString =["1","2","45","67"]

const arrayOfString : string[] = arrayOfNumber.map((number)=>{
    return number.toString();
})


// type AreaTypeString = {
    //     height: string,
    //     width:string
    // }
    
    const numberArray= [1,24,56,6]
    
    // interface NumberArray {
        //     [] : number
        // } 
        
        type AreaType = {
            height: number,
            width: number,
        }
type AreaTypeString = {
    [key in keyof AreaType] : string
}

type Height = AreaTypeString["height"]
type Width = AreaType["width"]



type AreaTypeString2<T> = {
    [key in keyof T] : T[key]
}

// const arrayString : <> = {

// }



}