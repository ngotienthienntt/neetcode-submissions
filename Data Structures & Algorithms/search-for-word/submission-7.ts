class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        // what is the same cell may not be used more than once in a word

        function checkValid(row: number, column: number, word: string, currentIndexWord: number, history: Map<string, number>){
            if(currentIndexWord == word.length){
                
                return true
            }

            if(row < 0 || row > board.length || column < 0 || column > board[0].length){
                return false
            }


            // console.log("history: ", history)
            // console.log("history get: ", history.get(`${row + 1},${column}`))
            // console.log("board: ", board)
            // console.log("word[currentIndexWord]: ", word[currentIndexWord])
            // console.log("board: ", board[row + 1][column])
            let result = false

            if(!history.get(`${row + 1},${column}`) && row + 1 < board.length && word[currentIndexWord] == board[row + 1][column]){
                // console.log("check row + 1")

                let newHistory = new Map(history)
                newHistory.set(`${row + 1},${column}`, 1)
                result = checkValid(row + 1, column, word, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row - 1},${column}`) && row - 1 >= 0 && word[currentIndexWord] == board[row - 1][column]){
                let newHistory = new Map(history)
                newHistory.set(`${row - 1},${column}`, 1)
                result = checkValid(row - 1, column, word, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row},${column + 1}`) && column + 1 < board[0].length && word[currentIndexWord] == board[row][column + 1]){
                let newHistory = new Map(history)
                newHistory.set(`${row},${column + 1}`, 1)
                result = checkValid(row, column + 1, word, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row},${column - 1}`) && column - 1 >= 0 && word[currentIndexWord] == board[row][column - 1]){
                let newHistory = new Map(history)
                newHistory.set(`${row},${column - 1}`, 1)
                result = checkValid(row, column - 1, word, currentIndexWord + 1, newHistory)
            }
            
            return result

        }

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                // console.log("board[i][j]", board[i][j])
                if(board[i][j] == word[0]){
                    // console.log("i = ", i)
                    // console.log("j = ", j)
                    let newHistory = new Map()
                    newHistory.set(`${i},${j}`, 1)

                    if(checkValid(i, j, word, 1, newHistory)){
                        return true
                    }
                }
            }
        }
    
        return false
        
    }
}

// C, A, A
// A, A, A
// B, C, D
