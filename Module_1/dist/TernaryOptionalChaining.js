"use strict";
var _a;
{
    // Ternary, optional chaining & nullish coalescing operator
    // Ternary
    const age = 14;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // nullish coalescing operator
    // null or undefine er upor vitti kore decition make korte chaile nullish coalescing use korbo
    const isAuthonticate = null;
    const result1 = isAuthonticate !== null && isAuthonticate !== void 0 ? isAuthonticate : "Guest";
    const user = {
        name: "Amdadul",
        address: {
            city: "Feni",
            permanentAddress: "Town",
        }
    };
    console.log((_a = user.address.presentAddress) !== null && _a !== void 0 ? _a : "no present address");
}
