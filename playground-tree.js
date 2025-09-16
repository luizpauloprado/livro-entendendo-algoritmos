class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrder(root) {
  if (root === null) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);

    // Since it is a LIFO | RIGHT go first | LEFT go second
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result.join("");
}

function inOrder(root) {
  if (!root) console.log("");

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  const sort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];

    let less = arr.slice(1).filter((value) => {
      return value <= pivot;
    });

    let greater = arr.slice(1).filter((value) => {
      return value > pivot;
    });

    return sort(less).concat(pivot, sort(greater));
  };

  const sortResult = sort(result);
  return sortResult.join("");
}

function calculateHeightRecursiveDFS(root) {
  // Base case: empty tree has height -1, single node has height 0
  if (root === null) {
    return -1;
  }

  // If it's a leaf node (no children), height is 0
  if (root.left === null && root.right === null) {
    return 0;
  }

  // Recursively calculate height of left and right subtrees
  const leftHeight = calculateHeightRecursiveDFS(root.left);
  const rightHeight = calculateHeightRecursiveDFS(root.right);

  // Height is 1 + maximum of left and right subtree heights
  return 1 + Math.max(leftHeight, rightHeight);
}

function getHeightIterativeBFS(root) {
  if (root === null) {
    return -1;
  }

  if (root.left === null && root.right === null) {
    return 0;
  }

  let height = -1;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    height++;

    // Process all nodes at current level
    console.log("level size: " + levelSize);
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return height;
}

const root = new Node(1);
root.right = new Node(2);
root.right.right = new Node(5);
root.right.right.right = new Node(6);
root.right.right.left = new Node(3);
root.right.right.left.right = new Node(4);

console.log("preOrder:");
console.log(preOrder(root));

console.log("inOrder:");
console.log(inOrder(root));

console.log("calculateHeight - DFS:");
console.log(calculateHeightRecursiveDFS(root)); // expected 4
console.log(calculateHeightRecursiveDFS(new Node(1))); // expected 0

console.log("calculateHeight - BFS:");
console.log(getHeightIterativeBFS(root)); // expected 4
console.log(getHeightIterativeBFS(new Node(1))); // expected 0
