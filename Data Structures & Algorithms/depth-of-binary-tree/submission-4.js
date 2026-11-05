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
    maxDepth(root) {
        if(root == null) return 0
        root.level = 1
        let stack = [root]
        let depth = 1

        while(stack.length > 0){
            let node = stack.pop()
            depth = Math.max(depth, node.level)

            if(node.left){
                node.left.level = node.level + 1
                stack.push(node.left)
            }

             if(node.right){
                node.right.level = node.level + 1
                stack.push(node.right)
            }
        }

        return depth
    }
}
