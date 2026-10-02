export function isWrong(board, row, col, num) {
  if (num === 0) return false;

  for (let c = 0; c < 9; c++) {
    if (c !== col && board[row][c] === num) return true;
  }

  for (let r = 0; r < 9; r++) {
    if (r !== row && board[r][col] === num) return true;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if ((r !== row || c !== col) && board[r][c] === num) return true;
    }
  }

  return false;
}

export function isWon(board) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0) return false;
      if (isWrong(board, r, c, board[r][c])) return false;
    }
  }
  return true;
}