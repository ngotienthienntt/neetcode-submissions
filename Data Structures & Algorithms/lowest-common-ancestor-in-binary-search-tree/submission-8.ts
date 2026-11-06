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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        let stack = [root]
        while(stack.length > 0){
            let node = stack.pop()
            if(Math.max(p.val, q.val) < node.val){
                stack.push(node.left)
            }else if(Math.min(p.val, q.val) > node.val){
                stack.push(node.right)
            }else{
                return node
            }
        }
    }
}
