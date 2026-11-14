class Trie {
    children: any;
    isEnd: boolean;
    constructor(){
        this.children = {}
        this.isEnd = false;
    }

    insert(word: string){
        if(word.length <= 0) return
        let dumpRoot = this

        for(let i = 0; i < word.length; i++){
            if(!dumpRoot?.children[word[i]]){
                let trie = new Trie()
                dumpRoot.children[word[i]] = trie
            }
            dumpRoot = dumpRoot.children[word[i]]

            if(i == word.length - 1){
                dumpRoot.isEnd = true
            }
        }

    }

    search(word: string){
        let dumpRoot = this 
        let listDump = dumpRoot

        for(let i = 0; i < word.length; i++){
                if(word[i] == '.'){
                    let subWord = word.slice(i + 1, word.length)
                    for(const [key, value] of Object.entries(dumpRoot?.children)){
                        if((value as Trie).search(subWord)){
                            return true
                        }
                    }

                    return false
                }else{
                    if(!dumpRoot?.children[word[i]]){
                        return false
                    }else{
                        dumpRoot = dumpRoot.children[word[i]]
                    }
                }
        }
        return dumpRoot?.isEnd
    }
}

class WordDictionary {
    trie: any;
    constructor() {
        this.trie = new Trie()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        this.trie.insert(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.trie.search(word)
    }
}
