class MaxHeap {
    heap: number[]
    constructor(arr: number[]){
        this.heap = []
        for(let i = 0; i < arr.length; i++){
            this.add(arr[i])
        }
    }

    add(val: number){
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    extractMax(){
        if(this.heap.length == 0) return -1
        let max = this.heap[0]
        let last = this.heap.pop()
        if(this.heap.length > 0){
            this.heap[0] = last
            this.heapifyDown(0)
        }
        return max
    }

    heapifyUp(index: number){
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2)
            if(this.heap[parentIndex] < this.heap[index]){
                let temp = this.heap[index]
                this.heap[index] = this.heap[parentIndex]
                this.heap[parentIndex] = temp
                index = parentIndex
            }else{
                break;
            }
        }
    }

    heapifyDown(index: number){
        while(index < this.heap.length){
            let largest = index
            let leftChild = 2 * index + 1
            let rightChild = 2 * index + 2

            if(this.heap[largest] < this.heap[leftChild]){
                largest = leftChild
            }

            if(this.heap[largest] < this.heap[rightChild]){
                largest = rightChild
            }

            if(largest == index) break

            let temp = this.heap[largest]
            this.heap[largest] = this.heap[index]
            this.heap[index] = temp

            index = largest

        }
    }


}

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    // use MaxHeap and Queue
    leastInterval(tasks: string[], n: number): number {
        // Maxheap to determine what is the largest to excute in cpu
        // Queue: to determine when a used task is able to use again (if task is able, it will be pushed into max heap again)
        let arrFre = this.buildFrequentTaskArray(tasks)
        let maxHeap = new MaxHeap(arrFre)
        let time = 0
        let queue = []
        // console.log("max heap: ", maxHeap)
        while(maxHeap.heap.length > 0 || queue.length > 0){
            // console.log("time: ", time)

            if(queue.length > 0 &&  time == queue[0][1]){
                let task = queue[0][0]
                // console.log("task: ", task)
                maxHeap.add(task)
                queue.splice(0, 1)
            }

            let maxFre = maxHeap.extractMax()
            time++
            maxFre--

            if(maxFre > 0){
                queue.push([maxFre, time + n])
            }

            // console.log("max heap: ", maxHeap)
            // console.log("queue: ", queue)
        }

        return time

    }

    buildFrequentTaskArray(tasks: string[]){
        let objFre = {}
        for(let i = 0; i < tasks.length; i++){
            if(objFre[tasks[i]]){
                objFre[tasks[i]] = objFre[tasks[i]] + 1
            }else{
                objFre[tasks[i]] = 1
            }
        }

        let arr = Object.entries(objFre).map(([key, value]) => {
            return value as number
        })

        return arr
    }
}
