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
const diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const findingDiameter = (root) => {
        if (!root) {
            return -1;
        }
        
        const leftSide = findingDiameter(root.left);
        const rightSide = findingDiameter(root.right);
        maxDiameter = Math.max(maxDiameter, 2 + leftSide + rightSide);
        
        return 1 + Math.max(leftSide, rightSide);
    }
    
    findingDiameter(root);
    return maxDiameter;
};