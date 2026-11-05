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
//DFS
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(root == null) return 0
        let stack = [{node: root, level: 1}]
        let depth = 1

        while(stack.length > 0){
            let {node, level} = stack.pop()
            depth = Math.max(depth, level)

            if(node.left){
                stack.push({node: node.left, level: level + 1})
            }

             if(node.right){
                stack.push({node: node.right, level: level + 1})
            }
        }

        return depth
    }
}
