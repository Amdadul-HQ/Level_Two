{
// Type Assertion

 let anyThing;

 anyThing = 222;
//  anyThing =  "Next Level Web Development";

 (anyThing as number)
 
 anyThing

 const kgToGram = (value : string | number) : string | number | undefined => {
    if(typeof value === "string"){
        return `The convert Value: ${parseFloat(value)*1000}`
    }
    if(typeof value === "number"){
        return value * 1000
    }
    return undefined;
 }

 const result = kgToGram(1000) as number

 const result1 = kgToGram("1100") as string


 type CustomeError = {
    message: string
 }

 try {
    
 } catch (error) {
        console.log((error as CustomeError).message)
 }

}