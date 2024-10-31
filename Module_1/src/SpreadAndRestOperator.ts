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
    
    const greetFriends = (...friend:string[]) => {
       friend.forEach(fri => console.log(fri))
    }

    greetFriends("Rimon","Shouvo","Niloy")

}