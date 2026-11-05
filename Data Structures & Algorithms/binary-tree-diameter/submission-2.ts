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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = [0]
        this.diameterRecursive(root, res)
        return res[0]
    }

    diameterRecursive(root: TreeNode, res: any){
        if(!root) return 0

        let left = this.diameterRecursive(root.left, res)
        let right = this.diameterRecursive(root.right, res)

        res[0] = Math.max(res[0], left + right)


        return Math.max(left, right) + 1
        
    }
}
