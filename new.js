//GTE

let gte = (v1, v2) => {
    if (v1 >= v2) {
        return true;
    } else {
        return false;
    }
}

console.log(gte(4, 7));

//tail

let arr = [
    { user: "abc", age: 20 },
    { user: "xyz", age: 10},
    { user: "wrt", age: 32 }
];
let tail = (arr) => {
    return arr2.slice(1, arr.length);
}

console.log(tail(myArr));
