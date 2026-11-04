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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(!root){
            return 0
        }else{
            let depthLeft = this.maxDepth(root.left)
            let depthRight = this.maxDepth(root.right)
            let max = Math.max(depthLeft, depthRight)

            return 1 + max
        }
    }
}
