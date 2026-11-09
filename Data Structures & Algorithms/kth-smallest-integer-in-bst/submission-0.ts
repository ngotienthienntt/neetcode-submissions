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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let res = []
        this.dfs(root, res)

        return res[k - 1]
    }

    dfs(root: TreeNode, res: Array<number>){
        if(!root) return

        this.dfs(root.left, res)
        res.push(root.val)
        this.dfs(root.right, res)
    }

}
