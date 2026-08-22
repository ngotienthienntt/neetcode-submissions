class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //c1: brute force O(n2) (O1 space)
        //c2: use map (find element equal (target - current value)) (O(n) space)
        //c3: because array is sorted in non-decresing order => use two pointer solution
        // target = pointer1 + pointer2
        // if(pointer1 + pointer2 > target)
            //=> decrease pointer2 becuase pointer2 now is the max value
            //=> decrease pointer1 => no, becuase pointer1 is min value, we can't decrease any more
        // if(pointer1 + pointer2 < target)
         //=> increase pointer1 becuase pointer1 now is the min value
            //=> increase pointer2 => no, becuase pointer2 is max value, we can't increase any more

        let start = 0
        let end = numbers.length - 1

        while(start < end){
            if(numbers[start] + numbers[end] == target){
                return [start + 1, end + 1]
            }

            if(numbers[start] + numbers[end] > target){
                end--
            }
            
             if(numbers[start] + numbers[end] < target){
                start++
            }

        }

        return []
    }
}
