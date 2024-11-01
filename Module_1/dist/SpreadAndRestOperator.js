"use strict";
{
    const poorUser = {
        name: "Amdadul"
    };
    //spared Operator
    const bro1 = ["Rimon", "Saif", "Mamun", "Shariar"];
    const bro2 = ["Ryhan Bhai", "Ferdows", "Nabid"];
    bro1.push(...bro2);
    console.log(bro1);
    const mertors1 = {
        redux: "Mir",
        typescript: "Mazba",
        dbms: "Mizan"
    };
    const mertors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid"
    };
    const mertors = Object.assign(Object.assign({}, mertors1), mertors2);
    const greetFriends = (...friend) => {
        friend.forEach(fri => console.log(fri));
    };
    greetFriends("Rimon", "Shouvo", "Niloy");
}
