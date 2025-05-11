// set in js

let emptySet = new Set()

// console.log(emptySet.size)

let myarr = [4, 5, 6]

let newSet = new Set([...myarr])

newSet.add(9)
newSet.clear()
console.log(newSet.has(1))
console.log(newSet)


let maps = new Map();

console.log(maps.size);  // Output: 0

let myarr2 = [
    [1, "mithun"],
    [2, "mithun"],
    [3, "mithun"]
];

myarr2.map((elementItems) => maps.set(elementItems[0], elementItems[1]));

console.log(maps);       // Output: Map(3) { 1 => 'mithun', 2 => 'mithun', 3 => 'mithun' }
console.log(maps.size);  // Output: 3
