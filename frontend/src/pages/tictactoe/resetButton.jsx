import React, { useState } from 'react';
//ai generated code :
const ResetButton = ({ src, alt, onClick }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    onClick(); // Call the passed onClick function
    setTimeout(() => setIsSpinning(false), 300); // Adjust delay as needed
  };

  return (
    <img
      src={src}
      alt={alt}
      className={isSpinning ? 'spin-resetButton' : 'resetButton'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Optional: Set cursor to pointer on hover
    />
  );
};

export default ResetButton;
