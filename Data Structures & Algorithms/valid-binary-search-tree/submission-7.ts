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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if(!root) return true
        let checkRight = this.isValidRight(root.right, 1000000000, root.val)
        let checkLeft = this.isValidRight(root.left, root.val, -1000000000)

        return checkRight && checkLeft
    }

    isValidRight(root: TreeNode,  max, min){
        if(!root) return true
        let isValidRoot = root.val > min && root.val < max
        if(!isValidRoot) return false


        if(root.left && root.right){
            
            isValidRoot = this.isValidRight(root.right, max, root.val ) && this.isValidLeft(root.left, root.val, min)
        }else if(root.left){
            isValidRoot = this.isValidLeft(root.left, root.val, min)
        }else if(root.right){
            isValidRoot = this.isValidRight(root.right, max, root.val )

        }

        return isValidRoot 
    }

    isValidLeft(root: TreeNode, max, min){
        if(!root) return true
        let isValidRoot = root.val > min && root.val < max
        if(!isValidRoot) return false

        if(root.left && root.right){
            isValidRoot =this.isValidRight(root.right, max, root.val ) && this.isValidLeft(root.left, root.val, min)
        }else if(root.left){
            isValidRoot = this.isValidLeft(root.left, root.val, min)
        }else if(root.right){
            isValidRoot = this.isValidRight(root.right, max, root.val )

        }

        return isValidRoot 
    }


    findValidBST(root: TreeNode, value: number){
        if(!root) return true
        let isValidRoot = true

        if(root.left && root.right){
            isValidRoot =
                        (value > root.left.val && value < root.right.val)
                        && this.findValidBST(root.left, value) && this.findValidBST(root.right, value)
        }else if(root.left){
            isValidRoot = value > root.left.val && this.findValidBST(root.left, value)
        }else if(root.right){
            isValidRoot = value < root.right.val && this.findValidBST(root.right, value)
        }

        return isValidRoot 
        
    }
}
