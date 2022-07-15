const SkylabArray = require("./SkylabArray");

const newArray = new SkylabArray(10, "lol", 666);
console.log(newArray);
console.log(newArray.length);
newArray.push("cigui");
newArray.push("cigui");
console.log(newArray);
const filterArray = newArray.filter("cigui");
console.log(filterArray);

const kandil = newArray.push("kandil");
console.log(kandil);
