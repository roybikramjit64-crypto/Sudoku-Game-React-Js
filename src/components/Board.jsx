import Cell from './Cell.jsx'
import {initialBoard} from '../utils/data.js'
import {isWrong} from '../utils/validator.js'
import './Board.css'

function Board({board, onCellChange}) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => {
            const wrong = isWrong(board, rowIndex, colIndex, cell)
            const isFixed = initialBoard[rowIndex][colIndex] !== 0

            const style = {
              borderRight: (colIndex === 2 || colIndex === 5) ? '3px solid black' : '1px solid #ccc',
              borderBottom: (rowIndex === 2 || rowIndex === 5) ? '3px solid black' : '1px solid #ccc',
            }

            return <Cell key={colIndex} value={cell !==0 ? cell : ''} onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)} isFixed={isFixed} isWrong={wrong} style={style} />
          })}
        </div>
      ))}
    </div>
  )
}

export default Board