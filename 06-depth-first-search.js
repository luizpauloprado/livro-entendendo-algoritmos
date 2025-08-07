class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfsRecursive(node) {
  if (!node) {
    return;
  }
  console.log(node.value); // Visit the current node (pre-order traversal)
  if (node.left) {
    dfsRecursive(node.left);
  }
  if (node.right) {
    dfsRecursive(node.right);
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log("dfsRecursive:");
dfsRecursive(root); // Output: 1, 2, 4, 5, 3

function dfsIterative(root) {
  if (!root) {
    return [];
  }
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    // Push right child first so left child is processed first (LIFO)
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
}

// Example usage with the same TreeNode structure
const rootIterative = new TreeNode(1);
rootIterative.left = new TreeNode(2);
rootIterative.right = new TreeNode(3);
rootIterative.left.left = new TreeNode(4);
rootIterative.left.right = new TreeNode(5);

console.log("dfsIterative:");
console.log(dfsIterative(rootIterative)); // Output: [1, 2, 4, 5, 3]