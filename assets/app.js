// Define the TreeNode class to represent each node in the binary tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Function to calculate the maximum depth of the binary tree
const maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  const values = JSON.parse(input);

  // Construct the binary tree
  let root = createTree(values);

  // Calculate the maximum depth of the binary tree
  const depth = maxDepth(root);

  // Display the output
  document.getElementById("output").innerText = "Maximum Depth: " + depth;
});

// Function to create a binary tree from the given array representation
function createTree(values) {
  if (values.length === 0) return null;

  const root = new TreeNode(values[0]);
  const queue = [root];

  for (let i = 1; i < values.length; i += 2) {
    const current = queue.shift();

    if (values[i] !== null) {
      current.left = new TreeNode(values[i]);
      queue.push(current.left);
    }

    if (i + 1 < values.length && values[i + 1] !== null) {
      current.right = new TreeNode(values[i + 1]);
      queue.push(current.right);
    }
  }

  return root;
}
