class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product = 1
        for(let i = 0 ; i < nums.length; i++){
        
            product = product * nums[i]
        }

        let output = []
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == 0){
                let newProduct = 1
                for(let j = 0; j < nums.length; j++){
                    if(j == i) continue
                    newProduct = newProduct * nums[j]
                }
                output.push(newProduct)
            }else{
                output.push(product / nums[i])
                
            }
        }

        return output
    }
}
