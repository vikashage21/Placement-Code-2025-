// object  method


let emp = {
    id: 101,
    name: "vikash",
    age: 24
}

let keys = Object.keys(emp)


console.log(keys)

let value = Object.values(emp);


console.log(value)

let entries = Object.entries(emp)

console.log(entries)


// stop to update the object data

Object.freeze(emp)


emp.id = 44444;


console.log("after changing id")

console.log(emp)

// Object.seal() - new value will not assign 

// creating a new object having older value .

let o = Object.assign({ company: "google" }, emp)

console.log(o)