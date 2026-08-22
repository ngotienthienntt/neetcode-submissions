class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newMapSpeed = new Map();
        for(let i = 0 ; i < position.length; i++){
            newMapSpeed.set(position[i], speed[i])
        }

        position.sort((a, b) => { return b - a})

        console.log("position: ", position)
        let countFleet = 0;
        let previousTimeArrive = 0;

        for(let i = 0; i < position.length; i++){
            let timeArrive = (target - position[i]) / newMapSpeed.get(position[i])
            if(timeArrive > previousTimeArrive){
                countFleet += 1
                previousTimeArrive = timeArrive
            }

        }

        return countFleet

    }
}
