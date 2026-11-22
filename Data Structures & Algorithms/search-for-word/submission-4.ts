class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        // what is the same cell may not be used more than once in a word
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                // console.log("board[i][j]", board[i][j])
                if(board[i][j] == word[0]){
                    // console.log("i = ", i)
                    // console.log("j = ", j)

                    if(this.checkValid(JSON.parse(JSON.stringify(board)), i, j, word)){
                        return true
                    }
                }
            }
        }

        return false
    }

    checkValid(board, row, column, word){

        // if(word == 'EFS'){
        //     console.log('row EFS: ', row)
        //     console.log('column EFS: ', column)
        //     console.log('board EFS: ', board)

        // }

        if(word.length == 0)
            return true

        if(row < 0 || row >= board.length || column < 0  || column >= board[0].length){

            // if(word[0] == 'T') {
                
            //     console.log("test")
            //     console.log("row test: ", row)
            //     console.log("column test: ", column)
            //     console.log("len: ", board.length)

            // }
            return false
        }
        //  console.log("board char: ", board[row][column])
        //     console.log("word: ", word)
        if(board[row][column] == word[0]){
            // console.log("row = ", row)
            // console.log("column = ", column)
            // console.log("board char: ", board[row][column])
            // console.log("word: ", word)
            // console.log("word sub: ", word.substring(1, word.length))


            board[row][column] = ""
            return this.checkValid(JSON.parse(JSON.stringify(board)), row - 1, column, word.substring(1, word.length))
                || this.checkValid(JSON.parse(JSON.stringify(board)), row + 1, column, word.substring(1, word.length))
                || this.checkValid(JSON.parse(JSON.stringify(board)), row, column - 1, word.substring(1, word.length))
                || this.checkValid(JSON.parse(JSON.stringify(board)), row, column + 1, word.substring(1, word.length))
        }

        return false
    }
}

// a, b, c ,e
// s, f, e, s
// a, d, e, e
