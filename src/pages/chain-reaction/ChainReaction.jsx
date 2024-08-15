import { useState } from "react";
import Atom from "./Atom";

const ChainReaction = () => {
  const size = 9;
  const [board, setBoard] = useState(
    Array(size)
      .fill()
      .map(() =>
        Array(size)
          .fill()
          .map(() => ({ atoms: 0, player: 0 }))
      )
  );
  const newBoard = [...board];

  const players = [{ name: "Red" }, { name: "Green" }];
  const [player, setPlayer] = useState(1);

  const handleAtoms = (row, col, player) => {
    if (row >= 0 && row < size && col >= 0 && col < size) {
      let adjacent = 0;
      if (row + 1 < size) adjacent++;
      if (row - 1 >= 0) adjacent++;
      if (col + 1 < size) adjacent++;
      if (col - 1 >= 0) adjacent++;
      if (newBoard[row][col].atoms < adjacent - 1) {
        newBoard[row][col].player = player;
        newBoard[row][col].atoms++;
        return;
      }
      newBoard[row][col].atoms = 0;
      newBoard[row][col].player = 0;
      handleAtoms(row + 1, col, player);
      handleAtoms(row - 1, col, player);
      handleAtoms(row, col + 1, player);
      handleAtoms(row, col - 1, player);
    }
  };

  return (
    <div className="flex mx-auto container h-screen px-5 items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={`flex items-center justify-center border-4 ${
            player == 1 ? "border-[#ed3f3e]" : "border-[#52be49]"
          } bg-neutral-100 p-3 rounded-lg`}
        >
          <h1 className="font-bold text-neutral-800 text-lg">{`Turn of ${
            players[player - 1].name
          }`}</h1>
        </div>
        <div className="flex flex-col w-full justify-center items-center h-full">
          {board.map((_, row) => (
            <div
              key={row}
              className="flex flex-row justify-center items-center w-full"
            >
              {_.map((_, col) => (
                <div
                  key={col}
                  className={`flex border-2 ${
                    player == 1 ? "border-[#ed3f3e]" : "border-[#52be49]"
                  } bg-transparent aspect-square w-[10%] max-w-[55px] min-w-[35px] items-center justify-center cursor-pointer hover:border-white hover:shadow-md hover:shadow-white hover:scale-110 hover:border-4 transition-all ease-in-out duration-150`}
                  onClick={() => {
                    if (
                      board[row][col].player == 0 ||
                      board[row][col].player == player
                    ) {
                      handleAtoms(row, col, player);
                      setBoard(newBoard);
                      player == 1 ? setPlayer(2) : setPlayer(1);
                    }
                  }}
                >
                  <Atom
                    count={board[row][col].atoms}
                    player={board[row][col].player}
                  ></Atom>
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
