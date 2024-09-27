import { useState, useMemo } from "react";
import Atom from "./Atom";
import { IoMdRefresh } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Input } from "@nextui-org/input";

const players = [
  { name: "Red", played: false, color: "#ed3f3e", isPlaying: false },
  { name: "Green", played: false, color: "#52be49", isPlaying: false },
  { name: "Yellow", played: false, color: "#f59e0b", isPlaying: false },
  { name: "Blue", played: false, color: "#3b82f6", isPlaying: false },
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

  let [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [isPlayable, setPlayable] = useState(false);
  const [playerCount, setPlayerCount] = useState(2);
  const isInvalidPlayers = useMemo(() => {
    return playerCount >= 2 && playerCount <= 4 ? false : true;
  }, [playerCount]);

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
        row.find((cell) => cell.player != 0 && cell.player != player)
      ) != undefined
    )
      return false;
    if (
      players.find((player) => !player.played && player.isPlaying) != undefined
    )
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
    players.forEach((player, index) => {
      player.played = false;
      if (index < playerCount) player.isPlaying = true;
      else player.isPlaying = false;
    });
    console.log(players);
    setPlayable(false);
    setPlayer(1);
    setWinner(0);
  };

  return (
    <div className="flex mx-auto container px-5 items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-4 my-14">
        {isPlayable ? (
          <div className="flex flex-row items-center justify-center gap-6">
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
                onClick={() => {
                  setPlayerCount(2), initBoard();
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-start justify-center gap-6">
            <div className="flex justify-center items-center">
              <Input
                radius="md"
                label="Number of players: (2-4)"
                startContent={
                  <div className="flex justify-center items-center">
                    <IoPerson className="text-neutral-700 text-lg" />
                  </div>
                }
                isInvalid={isInvalidPlayers}
                onValueChange={setPlayerCount}
                placeholder="2"
                color={isInvalidPlayers ? "danger" : "default"}
                errorMessage="Enter a value between 2 and 4"
                className="max-w-[200px] hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-300 hover:shadow-lg h-full flex"
              ></Input>
            </div>

            <div
              className="flex items-center justify-center border-4 border-blue-400 bg-neutral-100 p-3 rounded-lg duration-150 transition-all hover:scale-105 ease-in-out cursor-pointer group"
              onClick={() => {
                if (!isInvalidPlayers) {
                  initBoard();
                  setPlayable(true);
                }
              }}
            >
              <FaArrowRight className="font-bold text-neutral-800 text-2xl transition-all ease-in-out duration-300" />
            </div>
          </div>
        )}

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
                    isPlayable
                      ? player == 1
                        ? "border-[#ed3f3e]"
                        : "border-[#52be49]"
                      : "border-neutral-200"
                  } bg-transparent aspect-square w-[10%] max-w-[55px] min-w-[35px] items-center justify-center cursor-pointer hover:border-white hover:shadow-md hover:shadow-white hover:scale-110 hover:border-4 transition-all ease-in-out duration-150 select-none`}
                  onClick={() => {
                    if (
                      isPlayable &&
                      (board[row][col].player == 0 ||
                        board[row][col].player == player)
                    ) {
                      handleAtoms(row, col, player);
                      setBoard(newBoard);
                      if (checkWinner(player)) {
                        setWinner(player);
                        setTimeout(() => {
                          setPlayerCount(2);
                          initBoard();
                        }, 3000);
                        return;
                      }
                      player =
                        player < playerCount
                          ? setPlayer(player + 1)
                          : setPlayer((player + 1) % playerCount);
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
