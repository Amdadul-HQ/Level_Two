{
// Generics Type with InterFace

    type FrontEndDeveloper = ["HTML" & "CSS" & "React.js" & "JavaScript" & "TailwindCss"]
    type BackEndDeveloper = "Node.js" & "Express" & "mongoos" & "mongoDB"
    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper  & "AWS" & "Deploy"

    interface R15{
        name: "R15",
        model: string,
        import: boolean
    }

    interface KomDamiGori {
        name: "nam nai",
        model: "Model o nai",
    }

    interface Apple {
        name: "Apple",
        model: string,
    }

    interface Developer<T,B = null> {
        name:string;
        skills: FrontEndDeveloper,
        computer:{
            name: "HP" | "LG" | "ASSUS" | "MAC",
            model: string,
            realesDate:number
        },
        smartWatch: T,
        bike?:B
    }

    const PoorDeveloper : Developer<KomDamiGori> ={
        name:"Amdadul",
        skills:["HTML","CSS",],
        computer:{
            name:"ASSUS",
            model:"420",
            realesDate: 2002
        },
        smartWatch: {
            name: "nam nai",
            model:"Model o nai"
        }
    }
    const richDeveloper : Developer<Apple,R15> = {
        name: "Rimon",
        skills:["HTML","CSS","SASS","TailwindCss"],
        computer:{
            name:"MAC",
            model:"420",
            realesDate:2024
        },
        smartWatch:{
            name:"Apple",
            model:"320"
        },
        bike:{
            name:"R15",
            model:"R15 V4",
            import:true
        }
    }

    console.log(richDeveloper);



}