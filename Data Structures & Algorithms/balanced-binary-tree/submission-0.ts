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
    isBalanced(root: TreeNode | null): boolean {
        let result = [true]
        this.checkBalanced(root, result)
        return result[0]
    }

    checkBalanced(root: TreeNode, result: any){
        if(!root) return 0

        let left = this.checkBalanced(root.left, result)
        let right = this.checkBalanced(root.right, result)

        if(Math.abs(left - right) > 1) result[0] = false

        return Math.max(left, right) + 1

    }
}
