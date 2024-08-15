import React from "react";

const Atom = ({ count, player }) => {
  const images = [
    [
      "",
      "src/pages/chain-reaction/single_1.png",
      "src/pages/chain-reaction/double_1.png",
      "src/pages/chain-reaction/triple_1.png",
    ],
    [
      "",
      "src/pages/chain-reaction/single_2.png",
      "src/pages/chain-reaction/double_2.png",
      "src/pages/chain-reaction/triple_2.png",
    ],
  ];

  if (count > 0) {
    return (
      <img
        src={images[player - 1][count]}
        alt="Atom"
        className={`object-contain ${count == 1 ? "size-[60%]" : "size-[80%]"}`}
      />
    );
  }
};

export default Atom;
