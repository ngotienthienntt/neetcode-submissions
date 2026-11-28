class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        return this.checkRow(board) && this.checkColumn(board) && this.checkSubBox(board)
    }

    checkRow(board: string[][]){
        for(let i = 0; i < 9; i++){
            if(!this.isValidRow(board, i)){
                console.log("row in valid: ", i)

                return false
            }
        }

        return true
    }

    isValidRow(board: string[][], row){
        let set = new Set()
        for(let i = 0; i < 9; i++){
            if(board[row][i] == ".") continue
            if(set.has(board[row][i])){
                return false
            }else{
                set.add(board[row][i])
            }
        }

        return true
    }

    checkColumn(board: string[][]){
        for(let i = 0; i < 9; i++){
            if(!this.isValidColumn(board, i)){
                console.log("column in valid: ", i)
                return false
            }
        }

        return true
    }

    isValidColumn(board: string[][], column){
        let set = new Set()
        for(let i = 0; i < 9; i++){
            if(board[i][column] == ".") continue
            if(set.has(board[i][column])){
                return false
            }else{
                set.add(board[i][column])
            }
        }

        return true
    }

    checkSubBox(board: string[][]){
        // Each sub-box have 3 distance cell of row, 3 distance cell of column
        // iterate all sub-box
        for(let i = 0; i < 9; i += 3){
            for(let j = 0; j < 9; j += 3){
                // iterate each subbox -> from startrow to startrow + 3 and from startColumn to 
                // start column + 3
                if(!this.isValidSubBox(board, i, j)){
                    return false
                }

            }
        }

        return true
    }

    isValidSubBox(board: string[][], startRow: number, startColumn: number){
        let set = new Set()
        for(let i = startRow; i < startRow + 3; i++){
            for(let j = startColumn; j < startColumn + 3; j++){
                if(board[i][j] == ".") continue
                if(set.has(board[i][j])){
                    return false
                }else{
                    set.add(board[i][j])
                }
            }
        }

        return true
    }
}
 
