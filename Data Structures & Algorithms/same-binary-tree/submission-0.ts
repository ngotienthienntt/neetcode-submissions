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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
        let isRootSame = (p == null && q == null) || (p?.val == q?.val)
        let isLeftSame = true
        let isRightSame= true
        if(!isRootSame) return false;

        if(p?.left || q?.left)
            isLeftSame = this.isSameTree(p?.left, q?.left)
        
        if(p?.right || q?.right)
            isRightSame = this.isSameTree(p?.right, q?.right)

        return isRootSame && isLeftSame && isRightSame
    }
}
