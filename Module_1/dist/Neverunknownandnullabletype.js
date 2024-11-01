"use strict";
{
    // Never,unknown and nullable type
    // Null type
    const searchValue = (value) => {
        if (value) {
            console.log("value is here");
        }
        else {
            console.log("no value");
        }
    };
    searchValue(null);
}
