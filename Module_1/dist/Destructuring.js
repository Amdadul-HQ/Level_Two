"use strict";
const user = {
    data: {
        personalInfo: {
            firstName: "Amdadul",
            lastName: "Haque",
            age: 10
        },
        address: "Biroly",
        phone: 1236421
    }
};
const { data: { personalInfo: { firstName } }, data: { address: thikana } } = user;
// array destructuring
const myFriend = ["Rimon", "Saif", "Nabid", "Asif"];
const [a, b, c, d] = myFriend;
