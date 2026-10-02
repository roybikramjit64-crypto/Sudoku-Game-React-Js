import { useState, useEffect } from 'react'
import {initialBoard} from './utils/data.js'
import Board from './components/Board.jsx'
import {isWon} from './utils/validator.js'
import './App.css'


function App() {
  const [board, setBoard] = useState(initialBoard)
  const [won, setWon] = useState(false)

  useEffect(() => {
    if (isWon(board)) {
      setWon(true)
    } else {
      setWon(false)
    }
  }, [board])

  function handleCellChange(row, col, value) {
    if (value !== "" && !/^[1-9]$/.test(value)) return

    const newBoard = board.map(r => [...r])
    newBoard[row][col] = parseInt(value) || 0
    setBoard(newBoard)
  }

  return (
    <div className="app">
      {won && <div className="win-message">Congratulations! You won 🎉</div>}
      <h1>Sudoku Game</h1>
      <Board board={board} onCellChange={handleCellChange} />
    </div>
  )
}

export default App
