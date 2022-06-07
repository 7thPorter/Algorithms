/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    
    //First, we check to make sure that the node we're on isn't null, if it is, we'll just return the root;
    if (root === null) {
        return root;
    }
    
    //Then, we set a variable equal to the node on the left, so that we can then swap the two nodes (left and right).
    let left = root.left;
    
    root.left = root.right;
    root.right = left;
    
    //We run the function recursively on both child nodes, to make sure we hit every node in the tree. Binary trees will only ever have a left and right node.
    invertTree(root.left);
    invertTree(root.right);
    
    //Finally, we return the root, once we've run through the entire tree.
    return root;
};