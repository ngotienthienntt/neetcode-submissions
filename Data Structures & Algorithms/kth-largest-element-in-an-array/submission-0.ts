class MinHeap{
    heap: Array<number>
    k: number
    constructor(array: number[], k: number){
        this.heap = []
        this.k = k
        for(let i = 0; i < array.length; i++){
            this.add(array[i])
        }
    }

    add(val){
        if(this.heap.length < this.k){
            this.heap.push(val)
            this.heapifyUp(this.heap.length - 1)
        }else{
            if(val > this.heap[0]){
                this.heap[0]= val
                this.heapifyDown(0)
            }
        }
    }

    getSmallest(){
        return this.heap.length > 0 ? this.heap[0]: null
    }

    heapifyUp(index: number){
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2)

            if(this.heap[parentIndex] > this.heap[index]){
                let temp = this.heap[parentIndex]
                this.heap[parentIndex] = this.heap[index]
                this.heap[index] = temp
                index = parentIndex
            }else{
                break
            }
        }
    }

    heapifyDown(index: number){
        while(index < this.heap.length){
            let smallest = index
            let leftChild = 2 * index + 1
            let rightChild = 2 * index + 2

            if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
                smallest = leftChild
            }

            if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
                smallest = rightChild
            }

            if(smallest == index) break

            let temp = this.heap[smallest]
            this.heap[smallest] = this.heap[index]
            this.heap[index] = temp

            index = smallest
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        let newHeap = new MinHeap(nums, k)

        return newHeap.getSmallest()
    }
}
