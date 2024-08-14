import { useState } from "react";
import Atom from "./Atom";

const ChainReaction = () => {
  const size = 9;
  const [board, setBoard] = useState(
    Array(size)
      .fill()
      .map(() => Array(size).fill(0))
  );
  const newBoard = [...board];

  const handleAtoms = (row, col) => {
    if (row >= 0 && row < size && col >= 0 && col < size) {
      if (newBoard[row][col] < 3) {
        newBoard[row][col]++;
        return;
      }
      newBoard[row][col] = 0;
      handleAtoms(row + 1, col);
      handleAtoms(row - 1, col);
      handleAtoms(row, col + 1);
      handleAtoms(row, col - 1);
    }
  };

  return (
    <div className="flex mx-auto container h-screen px-5 items-center justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col w-full justify-center items-center h-full">
          {board.map((_, row) => (
            <div
              key={row}
              className="flex flex-row justify-center items-center w-full"
            >
              {_.map((_, col) => (
                <div
                  key={col}
                  className="flex border-2 border-blue-300 bg-transparent aspect-square w-[10%] max-w-[55px] min-w-[35px] items-center justify-center cursor-pointer hover:border-white hover:shadow-md hover:shadow-white hover:scale-110 hover:border-4 transition-all ease-in-out duration-150"
                  onClick={() => {
                    handleAtoms(row, col);
                    setBoard(newBoard);
                  }}
                >
                  <Atom count={board[row][col]}></Atom>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChainReaction;
