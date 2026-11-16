
class MaxHeap {
    heap: number[]
    constructor(arr: number[]){
        this.heap = []
        for(let i = 0; i < arr.length; i++){
            this.insert(arr[i])
        }
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    extractMax(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1){
            return this.heap.pop()
        }

        let max = this.heap[0]
        let last = this.heap.pop()
        this.heap[0] = last
        this.heapifyDown(0)
        return max
    }

    getParentIndex(childIndex: number){
        return Math.floor((childIndex - 1) / 2)
    }

    heapifyUp(index: number){
        while(index >= 1){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] < this.heap[index]){
                let temp = this.heap[parentIndex]
                this.heap[parentIndex] = this.heap[index]
                this.heap[index] = temp
                index = parentIndex
            }else{
                break;
            }
        }
    }

    getLeftChild(index){
        return 2 * index + 1
    }

    getRightChild(index){
        return 2 * index + 2
    }

    heapifyDown(index: number){
        while(index < this.heap.length){
            let largest = index
            let leftChild = this.getLeftChild(index)
            let rightChild = this.getRightChild(index)

            if(this.heap[largest] < this.heap[leftChild]){
                largest = leftChild
            }

            if(this.heap[largest] < this.heap[rightChild]){
                largest = rightChild
            }

            if(largest == index) break

            let temp = this.heap[index]
            this.heap[index] = this.heap[largest]
            this.heap[largest] = temp

            index = largest

        }
    }

    getHeapSize(){
        return this.heap.length
    }
}


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let maxHeap = new MaxHeap(stones)

    
        while(maxHeap.getHeapSize() > 1){
            let x = maxHeap.extractMax()
            let y = maxHeap.extractMax()
        console.log("x: ", x)
        console.log("y: ", y)
        console.log("heap : ", maxHeap.heap)

            if(x - y == 0){
                continue;
            }else if(x - y > 0){
                maxHeap.insert(x - y)
            }else{
                maxHeap.insert(y - x)
            }
        }

        console.log("max heap: ", maxHeap.heap)

        let last = maxHeap.extractMax();

        return last != null ?  last:  0
    }

    getHeaviestStones(stones: number[]): number{
        stones.sort((a, b) => {return a - b})
        return stones.pop()
    }
}
