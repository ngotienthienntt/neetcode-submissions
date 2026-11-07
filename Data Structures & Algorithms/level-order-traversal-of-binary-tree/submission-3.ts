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

// DFS can't resolve cause we can't keep order of node from left to right in the same level

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return []

        let output = []
        let stack = [{node: root, level: 0}]

        while(stack.length > 0){
            let {node, level} = stack.pop()
            
            let levelNode = output[level]
            if(levelNode == undefined)
                output.push([node?.val])
            else{
                levelNode.push(node?.val)
                // levelNode.sort( (a, b) => {return a - b}) // order from left to right, not order of value number
            }

            if(node?.right){
                stack.push({node: node.right, level: level + 1})
            }

            if(node?.left){
                stack.push({node: node.left, level: level + 1})
            }

           
        }

        return output
    }
}
