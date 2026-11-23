class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        let res = [false]

        function checkValid(row: number, column: number, currentIndexWord: number, history: Map<string, number>){
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
                result = checkValid(row + 1, column, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row - 1},${column}`) && row - 1 >= 0 && word[currentIndexWord] == board[row - 1][column]){
                let newHistory = new Map(history)
                newHistory.set(`${row - 1},${column}`, 1)
                result = checkValid(row - 1, column, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row},${column + 1}`) && column + 1 < board[0].length && word[currentIndexWord] == board[row][column + 1]){
                let newHistory = new Map(history)
                newHistory.set(`${row},${column + 1}`, 1)
                result = checkValid(row, column + 1, currentIndexWord + 1, newHistory)
            }

            if(result)
                return result
            
            if(!history.get(`${row},${column - 1}`) && column - 1 >= 0 && word[currentIndexWord] == board[row][column - 1]){
                let newHistory = new Map(history)
                newHistory.set(`${row},${column - 1}`, 1)
                result = checkValid(row, column - 1, currentIndexWord + 1, newHistory)
            }
            
            return result

        }

        function dfs(row, column){
            console.log("row: ", row)
            console.log("column: ", column)

            // if(row < 0 || column < 0 || row >=  board.length || column >= board[0].length ){
            //     return
            // }

            if(row < board.length && column < board[0].length && board[row][column] == word[0]){
                let history = new Map()
                history.set(`${row},${column}`, 1)
                let checkvalid = checkValid(row, column, 1, history)
                if(checkvalid){
                    res[0] = true
                    return
                }

            }

            if(column < board[0].length){
                dfs(row, column + 1)
            }else if (row < board.length){
                console.log("row test")
                dfs(row + 1, 0)
            }

            return

        }

        dfs(0, 0)

        return res[0]
    }
}
