class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const isValidRow = this.checkValidRow(board)
        const isValidCol = this.checkValidColumn(board)
        const isValidSquare = this.checkValidSquare(board)
        return isValidRow && isValidCol && isValidSquare
    }

    checkValidRow(board){
        const len = board.length

        for(let i = 0; i < len; i++){
            const map = new Map()
            for(let j = 0; j < len; j++){
                let item = board[i][j]
                if(item == ".") continue

                let existItem = map.get(item)
                if(existItem != undefined){
                    return false
                }
                map.set(item, 1)
            }
        }

        return true
    }

    checkValidColumn(board){
        const len = board.length

        for(let i = 0; i < len; i++){
            const map = new Map()

            for(let j = 0; j < len; j++){
                let item = board[j][i]
                if(item == ".") continue

                let existItem = map.get(item)
                if(existItem != undefined){
                    return false
                }
                map.set(item, 1)
            }
        }

        return true
    }

     checkValidSquare(board){
        const len = board.length

        for(let i = 0; i < len; i++){
            const map = new Map()
            for(let j = 0; j < 3; j++){
                for(let k = 0; k < 3; k++){
                    const div3 = Math.floor(i / 3)
                    const mod3 = i % 3
                    const row = j + div3 * 3
                    const col = k + mod3 * 3

                    let item = board[row][col]
                    if(item == ".") continue

                    let existItem = map.get(item)
                    if(existItem != undefined){
                        return false
                    }
                    map.set(item, 1)
                }
            }
        }

        return true
    }
}
