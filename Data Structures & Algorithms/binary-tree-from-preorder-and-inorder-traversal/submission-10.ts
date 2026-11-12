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

// Truyền start, end vào dfs thì vẫn phải dùng map
// thay start, end bằng inorder_index và limit chính là giới hạn của left subtree

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let preorder_index = 0 // đánh dấu node đã được tạo đến đâu
        let inorder_index = 0 // đánh dấu cây con trái đã được tạo đến đâu
        // tại sao dùng 2 biến này được và 2 biến này tăng dần vì dùng thuật toán dfs
        // cây sẽ được dựng lần lượt từ trái sang theo preorder

        function dfs(limit){
            if(preorder_index >= preorder.length) return null
            if(inorder[inorder_index] == limit){
                // left subtree đã được tạo thành công
                inorder_index++
                return null
            }

            let rootVal = preorder[preorder_index]
            let newNode = new TreeNode(rootVal)
            preorder_index = preorder_index + 1
            newNode.left = dfs(rootVal)
            newNode.right = dfs(limit)
            return newNode
        }

        return dfs(Infinity)
    }
}
