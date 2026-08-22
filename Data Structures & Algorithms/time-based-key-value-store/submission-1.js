class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const keyArr = this.keyStore.get(key)
        if(keyArr){
            keyArr.push({value, timestamp})
            this.keyStore.set(key, keyArr)
        }else{
            this.keyStore.set(key, [{value, timestamp}])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const keyArr = this.keyStore.get(key)
        if(!keyArr)  return ""
        let left = 0;
        let right = keyArr.length - 1;
        let output = null

        while(left <= right){
            const middle = Math.floor((left + right) / 2)
            if(keyArr[middle].timestamp == timestamp) return keyArr[middle].value

            if(keyArr[middle].timestamp < timestamp){
                output = keyArr[middle]
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

        return output ? output.value : ""
    }
}
