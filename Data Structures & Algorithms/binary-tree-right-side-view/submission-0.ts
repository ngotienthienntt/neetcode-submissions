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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        let result = []
        this.rightSideDns({root: root, depth: 0}, result)
        return result
    }

    rightSideDns({root, depth}, result){
        if(!root) return

        if(depth == result.length)
            result.push(root.val)

        if(root.right){
            this.rightSideDns({root: root.right, depth: depth + 1}, result)
        }

        if(root.left){
            this.rightSideDns({root: root.left, depth: depth + 1}, result)
        }

       
    }
}
