import React from 'react';
import gameLogo from './img/game-logo.png'; 
import backLogo from './img/back-button2.png';

export const Header = () => (
  <header>
    <div className="bg-blue-950 p-2 flex items-center text-white text-sm sm:text-base">
      <img src={gameLogo} alt="Game Logo" className="w-12 h-10 sm:w-18 sm:h-14 mr-2 sm:mr-3" />
      <span className="flex-grow text-center text-base sm:text-xl">
        WELCOME TO HANGMAN !!!
      </span>
      <div
        className="bg-blue-700 text-white rounded-md p-1 sm:p-2 flex items-center space-x-1 sm:space-x-2 hover:bg-slate-700 cursor-pointer"
        aria-label="Go back"
      >
        <img src={backLogo} alt="Back Logo" className="w-4 h-4 sm:w-6 sm:h-5" />
        <span className="text-xs sm:text-sm">Back</span>
      </div>
    </div>
  </header>
);
