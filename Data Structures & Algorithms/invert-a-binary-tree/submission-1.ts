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
        if(root == null) return null
        let stack = [root]
        while(stack.length > 0){
            let tempNode = stack.pop()
            let left = tempNode.right
            let right = tempNode.left
            tempNode.left = left
            tempNode.right = right
            if(left)
                stack.push(left)
            if(right)
                stack.push(right)
        }

        return root
    }
}
