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
 * @return {number}
 */
const maxDepth = function(root, depth = 0) {
    //Because we're looking for the depth, a null root returns 0, since it has no depth at all.
    if (root === null) {
        return 0
    }
    
    //Otherwise, we will compare the left and right nodes and take the maximum of those, then add 1 to the result.
    //This result is returned, and will be equal to the maximum depth of the tree.
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};