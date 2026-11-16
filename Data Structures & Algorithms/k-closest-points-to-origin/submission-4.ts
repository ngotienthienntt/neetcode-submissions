class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // kcloset point => k smallest distance => use MaxHeap to find
       // why use Maxheap vì khi muốn thay thế phần tử trong k smllest item thì phải
       // tìm thằng lớn nhất(O(1)) để so sánh nếu nó nhỏ hơn thì xóa nó đi và thêm thằng mới vào
       // còn dùng min heap thì muốn tìm thằng lớn nhất sẽ phải duyệt lại (O(n))

       let resultPoint = []

       for(let i = 0; i < points.length; i++){
            if(resultPoint.length >= k){
                if(this.compareTwoPoints(resultPoint[0], points[i]) > 0){
                    resultPoint[0] = points[i]
                    //heapify Down
                    let j = 0
                    while(j < resultPoint.length){
                        let largest = j
                        let leftChild = 2 * j + 1
                        let rightChild = 2 * j + 2
                        if(leftChild < resultPoint.length 
                        && this.compareTwoPoints(resultPoint[largest], resultPoint[leftChild]) < 0){
                            largest = leftChild
                        }

                        if(rightChild < resultPoint.length 
                        && this.compareTwoPoints(resultPoint[largest], resultPoint[rightChild]) < 0){
                            largest = rightChild
                        }

                        if(largest == j) break

                        let temp = resultPoint[largest]
                        resultPoint[largest] = resultPoint[j]
                        resultPoint[j] = temp

                        j = largest

                    }
                }
            }else{
                resultPoint.push(points[i])

                //heapifyUp

                let j = resultPoint.length - 1
                while(j > 0){
                    let parentIndex = Math.floor((j - 1) / 2)
                    if(parentIndex >= 0 && this.compareTwoPoints(resultPoint[j], resultPoint[parentIndex]) > 0){
                        let temp = resultPoint[parentIndex]
                        resultPoint[parentIndex] = resultPoint[j]
                        resultPoint[j] = temp
                        j = parentIndex
                    }else{
                        break
                    }
                }
                //todo
            }

            
       }

       return resultPoint
    }

     compareTwoPoints(point1: number[], point2: number[]){
        let distance1 = Math.sqrt(Math.pow(point1[0], 2) + Math.pow(point1[1], 2))
        let distance2 = Math.sqrt(Math.pow(point2[0], 2) + Math.pow(point2[1], 2))

        return distance1 - distance2
    }
}
