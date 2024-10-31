{

    const poorUser = {
        name:"Amdadul"
    }

    //spared Operator
    const bro1 : string[] = ["Rimon","Saif","Mamun","Shariar"]
    const bro2 : string[] = ["Ryhan Bhai","Ferdows","Nabid"]

    bro1.push(...bro2)
    console.log(bro1);

    const mertors1 = {
        redux: "Mir",
        typescript:"Mazba",
        dbms:"Mizan"
    }

    const mertors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid"
    }

    const mertors = {
        ...mertors1,
        ...mertors2
    }
    
    const greetFriends = (friend1:string,friend2: string,friend3:string) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    }

    greetFriends("Rimon","Shouvo","Niloy")

}