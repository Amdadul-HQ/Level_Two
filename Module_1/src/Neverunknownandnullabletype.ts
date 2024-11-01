{

// Never,unknown and nullable type

// Null type

    const searchValue=(value: string | null)=>{
        if(value){
            console.log("value is here");
        }
        else{
            console.log("no value");
        }
    }
    searchValue(null)
    

}