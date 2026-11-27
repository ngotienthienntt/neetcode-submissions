class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let mapFre = new Map()

        for(let i = 0; i < nums.length; i++){
            mapFre.set(nums[i], (mapFre.get(nums[i]) || 0) + 1)
        }

        // console.log("mapFre", mapFre)

        let heap = []

        for(const [key, value] of mapFre){
                if(heap.length < k){
                    heap.push(key)
                    this.heapifyUp(heap, heap.length - 1, mapFre)
                }else{
                    if(mapFre.get(key) > mapFre.get(heap[0])){
                        heap[0] = key
                        this.heapifyDown(heap, 0, mapFre)
                    }
                }
                // console.log("key: ", key, value)
                // console.log("heap: ", heap)
        }

        return heap
    }

    heapifyUp(heap: number[], index: number, mapFre){
        while(index > 0){
            let parent = Math.floor((index - 1) / 2)
            if(mapFre.get(heap[parent]) > mapFre.get(heap[index])){
                let temp = heap[parent]
                heap[parent] = heap[index]
                heap[index] = temp
                index = parent
            }else{
                break;
            }
        }
    }

    heapifyDown(heap: number[], index: number, mapFre){
        while(index < heap.length){
            let smallest = index
            let leftChild = 2 * index + 1
            let rightChild = 2 * index + 2
            
            if(leftChild < heap.length && mapFre.get(heap[leftChild]) < mapFre.get(heap[smallest])){
                smallest = leftChild
            }

            if(rightChild < heap.length && mapFre.get(heap[rightChild]) < mapFre.get(heap[smallest])){
                smallest = rightChild
            }

            if(smallest == index) break

            let temp = heap[smallest]
            heap[smallest] = heap[index]
            heap[index] = temp

            index = smallest
        }
    }
}
