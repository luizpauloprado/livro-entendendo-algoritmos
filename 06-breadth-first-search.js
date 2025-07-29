// Adding Elements:
// push(): Adds elements to the end.
// unshift(): Adds elements to the beginning.

// Removing Elements:
// pop(): Removes the last element.
// shift(): Removes the first element.

// Inserting/Removing at Specific Positions:
// splice(): Allows adding or removing elements at any index.

// Combining Arrays:
// concat(): Merges two or more arrays into a new array. 

// Iterating:
// forEach(), map(), filter(), reduce(): Powerful methods for looping and transforming arrays.

let myGraph = {};

myGraph["me"] = ["alice", "bob", "claire"];
myGraph["bob"] = ["anuj", "peggy"];
myGraph["alice"] = ["peggy"];
myGraph["claire"] = ["thom", "johny"];
myGraph["anuj"] = [];
myGraph["peggy"] = [];
myGraph["thom"] = [];
myGraph["johny"] = [];

console.log("Find the vendor");
console.log(myGraph);

const isVendor = (name) => {
    return name.endsWith("m", name.length);
}

const breadthFirstSearch = (graph) => {
    let list = graph["me"];
    let checked = [];

    while (list.length > 0) {
        const name = list.shift();
        console.log("current name:" + name);

        if (checked.includes(name) === false) {
            if (isVendor(name)) {
                console.log(name + " is a vendor!")
                return true;
            } else {
                list.push(...graph[name]);
                checked.push(name);
            }
        }
    }

    return false;
}

const result = breadthFirstSearch(myGraph);
console.log("Result: " + result);
