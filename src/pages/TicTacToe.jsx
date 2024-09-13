import React,{ useState }  from 'react'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square);

// Handle clicking a square
  const handleClick = (index) => {
    if (board[index] || winner) return;  //* Ignore if the square is already filled or game is won
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Restart the game
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
// Render a single square
  const renderSquare = (index) => (
    <button
      className="w-16 h-16 border-2 border-gray-700 text-2xl font-bold transition-transform transform"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );
// Determine the status message
const status = winner ? `Winner: ${winner}` : isDraw ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
      <h1 className="text-4xl font-bold mb-8 animate-heading">TicTacToe</h1>
      <div className="text-2xl font-bold mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((_, i) => (
          <div key={i} className={`transition-transform transform ${winner ? 'animate-winner' : ''}`}>
            {renderSquare(i)}
          </div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        onClick={restartGame}
      >
        Restart Game
      </button>
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;