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
        let queue = [{node: root, depth: 1}]
        let output = []

        while(queue.length > 0){
            let {node, depth} = queue[0]
            queue.splice(0, 1)
            if(output.length < depth && node){
                output.push(node?.val)
            }

            if(node?.right){
                queue.push({node: node.right, depth: depth + 1})
            }

            if(node?.left){
                queue.push({node: node.left, depth: depth + 1})
            }
        }

        return output
    }
}
