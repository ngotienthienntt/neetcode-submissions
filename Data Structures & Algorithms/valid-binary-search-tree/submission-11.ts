/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        return this.isValidBSTree(root, null, null)
    }

    isValidBSTree(root: TreeNode,  max, min){
        if(!root) return true
        let isValidRoot = (min == null || root.val > min) && (max == null || root.val < max)
        if(!isValidRoot) return false

        return this.isValidBSTree(root.right, max, root.val ) && this.isValidBSTree(root.left, root.val, min) 
    }
}
