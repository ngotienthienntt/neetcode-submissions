class MinHeap {
    // the parrent node is alway <= their children
    // use to find top K
    constructor(){

    }

    insert(){
        // add new item in Heap
    }

    extractSmallest(){
        // extract smallest item
    }

    heapifyUp(){
        // rearranged heap from top to bottom
    }


    heapifyDown(){
        // rearranged heap from bottom to top
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    k: number;
    nums: Array<number>;
    constructor(k: number, nums: number[]) {
        this.k = k
        this.nums =  []
        for(let i = 0; i < nums.length; i++){
            this.add(nums[i])
        }

        console.log("this.nums: ", this.nums)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        if(this.nums.length >= this.k){
            if(this.nums[0] <= val){
                this.nums[0] = val
                this.heapifyDown(0)
            }
        }else{
            this.nums.push(val)
            this.heapifyUp(this.nums.length - 1)
        }
        console.log("num: ", val)
        console.log("num add: ", this.nums)
        return this.nums[0]
    }

    getParentIndex(childIndex: number){
        if(childIndex < 1) return 0
        return Math.floor((childIndex - 1) / 2)
    }

    getLeftChild(parentIndex: number){
        return 2 * parentIndex + 1
    }

    getRightChild(parentIndex: number){
        return 2 * parentIndex + 2
    }

    heapifyUp(index: number){
        while(true){
            if(index == 0) break;

            let parentIndex = this.getParentIndex(index)

            if(this.nums[parentIndex] > this.nums[index] ){
                let temp = this.nums[parentIndex]
                this.nums[parentIndex] = this.nums[index]
                this.nums[index] = temp
                index = parentIndex
            }else{
                break;
            }


        }
    }

    heapifyDown(index: number){
        let parent = index
        while(true){
            let smallest = index
            if(smallest >= this.nums.length) break;

            let leftChild = this.getLeftChild(smallest)
            let rightChild = this.getRightChild(smallest)

            if(this.nums[smallest] >= this.nums[leftChild]){
                smallest = leftChild
            }

            if(this.nums[smallest] > this.nums[rightChild]){
                smallest = rightChild
            }

            if(smallest != index){
                let temp = this.nums[smallest]
                this.nums[smallest] = this.nums[index]
                this.nums[index] = temp
            }else{
                break;
            }

            index = smallest

        }
    }
}
