import React from "react";

const Atom = ({ count, player }) => {
  const images = [
    [
      "",
      "images/single_1.png",
      "images/double_1.png",
      "images/tripple_1.png",
    ],
    [
      "",
      "images/single_2.png",
      "images/double_2.png",
      "images/tripple_2.png",
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
