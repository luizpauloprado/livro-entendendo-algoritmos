// get keys = Object.keys(<dictionary>)

const graph = {};
graph["inicio"] = {};
graph["inicio"]["a"] = 6;
graph["inicio"]["b"] = 2;
graph["a"] = {};
graph["a"]["fim"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fim"] = 5;
graph["fim"] = {}

const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fim"] = Number.POSITIVE_INFINITY;

const parents = {};
parents["a"] = "inicio";
parents["b"] = "inicio";
parents["fim"] = null;

let processed = [];

const findLowerCostNode = () => {
    let lowerCost = Number.POSITIVE_INFINITY;
    let lowerCostNode = null;

    for (const key in costs) {
        const cost = costs[key];

        if (cost < lowerCost && processed.includes(key) === false) {
            lowerCost = cost;
            lowerCostNode = key;
        }
    }

    return lowerCostNode;
}

const dijkstra = () => {
    let node = findLowerCostNode(costs); 

    while (node !== null) {
        const cost = costs[node];
        const neighbors = graph[node];

        for (const key in neighbors) {
            let newCost = cost + neighbors[key]; 

            if (costs[key] > newCost) { 
                costs[key] = newCost;
                parents[key] = node;
            }
        }

        processed.push(node);
        node = findLowerCostNode(costs);
    }
}

dijkstra();
console.log("Parents:");
console.log(parents);
console.log("Costs:");
console.log(costs);