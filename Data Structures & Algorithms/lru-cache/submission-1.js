class LRUCache {

    // Tim cac don gian nhat truoc da
    // array để lưu những thằng đã được sử dụng gần đây
    // lruArray
    // array => mỗi lần thay đổi phải sắp xếp lại độ ưu tiên
    // linklist => kiểm tra capacity bằng cách nào?

    lruArray = []
    cap = 0
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
    }

    /**
     * @param {number} key
     * 
     * 
     * @return {number}
     */
    get(key) {
        let index = this.lruArray.findIndex((item) => { 
            // console.log("get item: ", item)
            return key == item.key
        })

        let item = index != -1 ? this.lruArray[index]: undefined
        // console.log("get item: ", item)
        if(item){
            this.lruArray.splice(index, 1)
            this.lruArray.push(item)
        }
        
        return item ? item.value : -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this.lruArray.findIndex((item) => {
            // console.log("item: ", item) 
            return key == item.key
        })

        // console.log("put: ", index)
        let item = index != -1 ? this.lruArray[index]: undefined
        if(item){
            this.lruArray.splice(index, 1)
            this.lruArray.push({key, value})
        }else{
            if(this.lruArray.length < this.cap){
                this.lruArray.push({key, value})
            }else{
                this.lruArray.splice(0, 1)
                this.lruArray.push({key, value})
            }
        }
    }
}
