class MinStack {
    arr = []
    min = Infinity
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        //vì sử dụng 1 stack nên nếu val(giá trị hiện tại thì - min sẽ nhỏ hơn 0(negative))
        // sử dụng cái này để làm dấu hiệu nhận biết
        if(this.arr.length == 0){
            this.arr.push(val)
            this.min = val
        }else{
            this.arr.push(val - this.min)
            if(val < this.min) this.min = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.arr.length == 0) return undefined

        let pop = this.arr.pop()
        let result = pop > 0 ? this.min + pop: this.min
        this.min = pop < 0 ? this.min - pop: this.arr.length < 1 ? Infinity : this.min

        return result
    }

    /**
     * @return {number}
     */
    top() {
        if(this.arr.length == 0) return undefined

        let lastItem = this.arr[this.arr.length - 1]

        return lastItem < 0 || this.arr.length == 1 ? this.min : this.min + lastItem
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
