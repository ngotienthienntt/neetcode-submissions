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
        this.dfs(root, res)
        return res[0]
    }

    dfs(root: TreeNode, res: any){
        
        if(!root) return 0

        let left = this.dfs(root.left, res)
        let right = this.dfs(root.right, res)
        res[0] = Math.max(res[0], left + right)

        return Math.max(left, right) + 1
        
    }
}
