class MinHeapK{
    k = 0;
    arrHeap = []
    map = new Map();

    constructor(k, arr, map){
        this.k = k
        this.map = map

        for(let [key, value] of map){
            this.push(key)
        }
    }

    push(val){
        if(this.arrHeap.length < this.k){
            this.arrHeap.push(val)
            this.heapifyUp()
        }else{
            if(this.map.get(val) > this.map.get(this.arrHeap[0])){
                this.arrHeap[0] = val
                this.heapifyDown()
            }
        }
    }

    pop(){

    }

    heapifyUp(){
        let i = this.arrHeap.length - 1

        while(i > 0){
            let parent = Math.floor((i - 1) / 2)
            if(this.map.get(this.arrHeap[parent]) > this.map.get(this.arrHeap[i])){
                let temp = this.arrHeap[parent]
                this.arrHeap[parent] = this.arrHeap[i]
                this.arrHeap[i] = temp
                i = parent
            }else{
                break;
            }
        }
    }

    heapifyDown(){
        let parent = 0
        let len = this.arrHeap.length

        while(parent < this.arrHeap.length){
            let leftChild = 2 * parent + 1;
            let rightChild = 2 * parent + 2;
            let smallest = parent

            if(leftChild < len && this.map.get(this.arrHeap[smallest]) > this.map.get(this.arrHeap[leftChild])) smallest = leftChild
            if(rightChild < len && this.map.get(this.arrHeap[smallest]) > this.map.get(this.arrHeap[rightChild])) smallest = rightChild

            if (smallest == parent) break;

            let temp = this.arrHeap[parent]
            this.arrHeap[parent] = this.arrHeap[smallest]
            this.arrHeap[smallest] = temp

            parent = smallest
        }
    }

    getArr(){
        return this.arrHeap;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Use heap
        // min heap or max heap? min heap
        // nums => frequentNum [{num, frequent}] => map
        // frequentNum => min heap
        // return min heap
        let mapFrequent = new Map()

        for(let item of nums){
            let fre = mapFrequent.get(item)
            if(fre != undefined){
                mapFrequent.set(item, fre + 1)
            }else{
                mapFrequent.set(item, 1)

            }
        }

        for (const [key, value] of mapFrequent) {
  console.log(`${key}: ${value}`);
}
        let heapK = new MinHeapK(k, nums, mapFrequent)
        return heapK.getArr()
    }
}