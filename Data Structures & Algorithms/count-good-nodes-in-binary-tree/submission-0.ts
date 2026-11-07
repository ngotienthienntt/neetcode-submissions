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
    goodNodes(root: TreeNode | null): number {
        if(!root) return 0
        let res = [0]
        let max = root.val
        this.countGoodNodes(root, res, max)
        return res[0]

    }

    countGoodNodes(root: TreeNode, res: Array<number>, max: number){
        if(!root) return

        if(root.val >= max){
            res[0] = res[0] + 1
            max = root.val
        }

        if(root.left)
            this.countGoodNodes(root.left, res, max)

        if(root.right)
            this.countGoodNodes(root.right, res, max)
    }   
}
