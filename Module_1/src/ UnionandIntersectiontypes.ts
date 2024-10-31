{

    // UnionanIntersectiontypes
    type FrontEndDeveloper = "React.js" | "Anguler.js"
    type BackDeveloper = "AWS" | "DevOps"

    type Developer = FrontEndDeveloper | BackDeveloper;

    
    
    
    const fullStack :Developer = "AWS"
    
    
    const newDeveloper :FrontEndDeveloper = "Anguler.js" 
    
    type User = {
        name: string,
        blood: "A+" | "B+" | "O+",
        gender: "male" | "female"
    }
    
    const user : User = {
        name:"Amdadul",
        blood:"A+",
        gender:"male"
    }

    // Intersection
    
    type FullStackDeveloper  = FrontEndDeveloper & BackDeveloper;
    
}