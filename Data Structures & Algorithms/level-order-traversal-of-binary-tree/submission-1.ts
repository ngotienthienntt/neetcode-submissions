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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return []
        let queue = [root, 1] as any
        let output = [[]] as any
        let level = 0

        while(queue.length > 0){
            let node = queue[0]
            queue.splice(0, 1)

            if(typeof node == 'number'){
                level = node
                if(queue.length > 0){
                    queue.push(node + 1)
                    output.push([])
                }
            }else{
                if(node?.val != undefined){
                    output[level].push(node?.val)
                }

                if(node?.left){
                    queue.push(node.left)
                }

                if(node?.right){
                    queue.push(node.right)
                }
            }
        }

        return output
    }
}
