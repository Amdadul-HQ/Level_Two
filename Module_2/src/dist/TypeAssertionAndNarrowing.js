"use strict";
{
    // Type Assertion
    let anyThing;
    anyThing = 222;
    //  anyThing =  "Next Level Web Development";
    anyThing;
    anyThing;
    const kgToGram = (value) => {
        if (typeof value === "string") {
            return `The convert Value: ${parseFloat(value) * 1000}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
        return undefined;
    };
    const result = kgToGram(1000);
    const result1 = kgToGram("1100");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
