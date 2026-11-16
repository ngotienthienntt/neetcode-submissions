class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        points.sort((point1, point2) => { return this.compareTwoPoints(point1, point2)})

        let result = []
        for(let i = 0; i < k; i++){
            result.push(points[i])
        }

        return result
    }

    compareTwoPoints(point1: number[], point2: number[]){
        let distance1 = Math.sqrt(Math.pow(point1[0], 2) + Math.pow(point1[1], 2))
        let distance2 = Math.sqrt(Math.pow(point2[0], 2) + Math.pow(point2[1], 2))

        return distance1 - distance2
    }
}
