import { useState } from "react";
import Atom from "./Atom";
import { IoMdRefresh } from "react-icons/io";

const players = [
  { name: "Red", played: false, color: "#ed3f3e" },
  { name: "Green", played: false, color: "#52be49" },
];

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

  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

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
        players[player - 1].played = true;
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

  const checkWinner = (player) => {
    if (
      board.find((row) =>
        row.find((cell) => cell.player != player && cell.player != 0)
      ) != undefined
    )
      return false;
    if (players.find((player) => player.played == false) != undefined)
      return false;
    return true;
  };

  const initBoard = () => {
    setBoard(
      Array(size)
        .fill()
        .map(() =>
          Array(size)
            .fill()
            .map(() => ({ atoms: 0, player: 0 }))
        )
    );
    players.forEach((player) => (player.played = false));
    setPlayer(1);
    setWinner(0);
  };

  return (
    <div className="flex mx-auto container px-5 items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-6 my-14">
        <div className="flex flex-row items-center justify-center gap-10">
          {winner == 0 ? (
            <div
              className={`flex items-center justify-center border-4 ${
                player == 1 ? "border-[#ed3f3e]" : "border-[#52be49]"
              } bg-neutral-100 p-3 rounded-lg hover:scale-105 duration-150 transition-all ease-in-out select-none`}
            >
              <h1 className="font-bold text-neutral-800 text-lg">{`Turn of ${
                players[player - 1].name
              }`}</h1>
            </div>
          ) : (
            <div
              className={`flex items-center justify-center border-4 ${
                winner == 1 ? "border-[#ed3f3e]" : "border-[#52be49]"
              } bg-neutral-100 p-3 rounded-lg hover:scale-105 duration-150 transition-all ease-in-out select-none`}
            >
              <h1 className="font-bold text-neutral-800 text-lg">{`Winner is ${
                players[player - 1].name
              }!`}</h1>
            </div>
          )}

          <div className="flex items-center justify-center border-4 border-blue-400 bg-neutral-100 p-3 rounded-lg duration-150 transition-all hover:scale-105 ease-in-out cursor-pointer group">
            <IoMdRefresh
              className="font-bold text-neutral-800 text-3xl group-hover:rotate-180 transition-all ease-in-out duration-300"
              onClick={() => initBoard()}
            />
          </div>
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
                  } bg-transparent aspect-square w-[10%] max-w-[55px] min-w-[35px] items-center justify-center cursor-pointer hover:border-white hover:shadow-md hover:shadow-white hover:scale-110 hover:border-4 transition-all ease-in-out duration-150 select-none`}
                  onClick={() => {
                    if (
                      board[row][col].player == 0 ||
                      board[row][col].player == player
                    ) {
                      handleAtoms(row, col, player);
                      setBoard(newBoard);
                      if (checkWinner(player)) {
                        setWinner(player);
                        setTimeout(() => {
                          initBoard();
                        }, 3000);
                        return;
                      }
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
