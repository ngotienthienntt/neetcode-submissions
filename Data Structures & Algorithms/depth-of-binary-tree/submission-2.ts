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
    maxDepth(root: TreeNode | null): number {
        if(root == null) return 0
        let queue = [root, 1] as Array<any>
        let level = 1
        while(queue.length > 0){
            let tempNode = queue[0]
            queue.splice(0, 1)
            if(tempNode.left) queue.push(tempNode.left)
            if(tempNode.right) queue.push(tempNode.right)
            if(typeof tempNode === 'number'){
                level = tempNode
                if(queue.length > 0)
                    queue.push(level + 1)
                continue
            }
        }

        return level
    }
}
