import React from "react";

const ChainReaction = () => {
  const size = 9;
  return (
    <div className="flex mx-auto container h-screen px-5 items-center justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col w-full justify-center items-center h-full">
          {Array(size)
            .fill()
            .map((_, row) => (
              <div
                key={row}
                className="flex flex-row justify-center items-center w-full"
              >
                {Array(size)
                  .fill()
                  .map((_, col) => (
                    <div
                      key={col}
                      className="flex border-2 border-blue-300 bg-transparent aspect-square w-[10%] max-w-[55px] min-w-[35px] items-center justify-center cursor-pointer hover:border-white hover:shadow-md hover:shadow-white hover:scale-110 hover:border-4 transition-all ease-in-out duration-150"
                    ></div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChainReaction;
