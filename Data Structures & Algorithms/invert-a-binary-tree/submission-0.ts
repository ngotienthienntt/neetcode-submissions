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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {

        if(root == null){
            return null
        }else{
            let left = this.invertTree(root.right)
            let right = this.invertTree(root.left)
            let newRoot = new TreeNode(root.val, left, right)
            return newRoot
        }
    }
}
