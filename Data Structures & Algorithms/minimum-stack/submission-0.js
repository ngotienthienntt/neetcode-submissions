class MinStack {
    arr = []
    min = []
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.min.length == 0 || val <= this.min[this.min.length - 1]) this.min.push(val)
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        let lastIte = this.arr.pop()

        if(this.min[this.min.length - 1] == lastIte) this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
