
class NNode {
    key: any;
    value: number;
    next: NNode;
    prev: NNode;
    constructor(key, value, next, prev){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    
}

class ListNode {
    head: NNode;
    tail: NNode;
    constructor(newNode: NNode){
        this.head = newNode;
        this.tail = newNode;
    }

    remove(currentNode: NNode): void{
        let prevNode = currentNode.prev
        let nextNode = currentNode.next
        if(prevNode){
            prevNode.next = nextNode

            if(nextNode){
                nextNode.prev = prevNode
            }else{
                this.tail = prevNode
            }
        }else{
            currentNode = currentNode.next
            if(currentNode){
                currentNode.prev = undefined
                this.head = currentNode
            }else{
                this.head = undefined
                this.tail = undefined
            }
        }
    }

    push(newNode: NNode): void{
        if(this.tail){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = this.tail.next
        }else{
            this.head = newNode
            this.tail = this.head
        }
    }

    updateRecentlyUse(currentNode: NNode){
        const value = currentNode?.value
        const key = currentNode?.key
        this.remove(currentNode)
        const newNode = new NNode(key, value, null, null)
        this.push(newNode)
        return newNode
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    map = null;
    listNode = null;
    capacity = 0;
    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
        this.listNode = new ListNode(null)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let item = this.map.get(key)
       
        if(!item){
            return -1
        }else{
            const value = item.value
            if(this.listNode){
               let currentNode = this.listNode.updateRecentlyUse(item)
                this.map.set(key, currentNode)
            }
            // console.log("Get key: ", key)
            // console.log("Get head key: ", this.listNode.head)
            // this.map.forEach((value, key, map) => {
            //     console.log(`${key}: ${value.value}`)
            // })
            
            return value;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
         let item = this.map.get(key)
        if(!item){
            const newNode = new NNode(key, value, null, null)
            if(this.map.size >= this.capacity){
                
                let currentHead = this.listNode.head;
                // if(key == 4) console.log("current key: ", currentHead?.key)
                this.map.delete(currentHead?.key)
                this.listNode.head = this.listNode?.head?.next
                if(this.listNode.head)
                    this.listNode.head.prev = undefined

                this.listNode.push(newNode)
                this.map.set(key, newNode)
            }else{
                this.map.set(key, newNode)
                this.listNode.push(newNode)
            }
        }else{
            item.value = value
            if(this.listNode){
                let currentNode = this.listNode.updateRecentlyUse(item)
                this.map.set(key, currentNode)
            }
        }

        // console.log("Put key: ", key)
        // console.log("Put head key: ", this.listNode.head)

        // this.map.forEach((value, key, map) => {
        //     console.log(`${key}: ${value.value}`)
        // })
    }
}
