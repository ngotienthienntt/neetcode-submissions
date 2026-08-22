class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let IndexTargetMatrix = -1
        for(let i = 1; i < matrix.length; i++){

            if(matrix[i][0]  > target){
                IndexTargetMatrix = i - 1
                break
            }
        }
        console.log("IndexTargetMatrix: ", IndexTargetMatrix)

        if(IndexTargetMatrix == -1) IndexTargetMatrix = matrix.length - 1

        const targetMatrix = matrix[IndexTargetMatrix]
        console.log("targetMatrix: ", targetMatrix)

        let left = 0
        let right = targetMatrix.length - 1
        
        while(left <= right){
            const middle = Math.floor((left + right) / 2)

            if(targetMatrix[middle] == target) return true

            else if(targetMatrix[middle] > target){
                right = middle - 1
            }else{
                left = middle + 1
            }
        }

        return false
    }
}
