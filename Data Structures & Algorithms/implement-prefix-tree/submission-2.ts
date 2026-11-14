class PrefixTree {
    children: any;
    isEnd: boolean;
    constructor() {
        this.children = {}
        this.isEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        if(!this.children){
            this.children = {}
        }

        if(!this.isEnd && word.length > 0){
            this.isEnd = false
        }
        let dumpRoot = this
        for(let i = 0; i < word.length; i++){
            if(!dumpRoot?.children[word[i]]){
                let newPrefixTree = new PrefixTree()
                dumpRoot.children[word[i]] = newPrefixTree
            }
            dumpRoot = dumpRoot.children[word[i]]

            if(i == word.length - 1){
                dumpRoot.isEnd = true
            }

        }

        // console.log("insert: ", word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let dumpRoot = this
        // console.log("search: ", word)
        for(let i = 0; i < word.length; i++){
            if(!dumpRoot?.children[word[i]]){

                return false
            }
            dumpRoot = dumpRoot.children[word[i]]
        }

                // console.log("dumpRoot: ", dumpRoot)

        return dumpRoot?.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
         let dumpRoot = this
        for(let i = 0; i < prefix.length; i++){
            if(!dumpRoot?.children[prefix[i]]){
                return false
            }
            dumpRoot = dumpRoot.children[prefix[i]]
        }

        return true
    }
}
