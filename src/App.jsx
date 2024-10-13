import TicTacToe from "./pages/tictactoe/tictactoe";
import Header from "./components/header/header";
import GameCard from "./components/gameCard/GameCard";
import Connect4 from "./pages/connect4/connect4";
import ChainReaction from "./pages/chain-reaction/ChainReaction";
import { useState } from "react";
function App() {
  const [choice, setChoice] = useState(0);

  if (choice == 1) {
    return (
      <div className="min-h-screen">
        <Header text={"Tic Tac Toe"} onImgClick={() => setChoice(0)} />
        <div className="bg-[url('/images/background.jpeg')] bg-no-repeat bg-cover bg-left-top pt-[30px]">
          <TicTacToe />
        </div>
      </div>
    );
  } else if (choice == 2) {
    return (
      <div className="min-h-screen">
        <Header text={"Connect 4"} onImgClick={() => setChoice(0)} />
        <div className="bg-[url('/images/background.jpeg')] bg-no-repeat bg-cover bg-left-top pt-[30px]">
          <Connect4 />
        </div>
      </div>
    );
  } else if (choice == 3) {
    return (
      <div className="min-h-screen">
        <Header text={"Chain Reaction"} onImgClick={() => setChoice(0)} />
        <div className="bg-[url('/images/background.jpeg')] bg-no-repeat bg-cover bg-left-top pt-[30px]">
          <ChainReaction />
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen">
        <Header text={"Mini Games"} onImgClick={() => setChoice(0)} />
        <div className="cardList bg-[url('/images/background.jpeg')] bg-no-repeat bg-cover bg-left-top pt-[30px]">
          <GameCard
            onCardClick={() => setChoice(1)}
            imgPath={"../../images/banners/tictactoe-banner.png"}
            gameName={"Tic Tac Toe"}
            playerCount={2}
            gameDuration={"1 min."}
          />
          <GameCard
            onCardClick={() => setChoice(2)}
            gameName={"Connect 4"}
            imgPath={"../../images/banners/connect 4 banner.jpg"}
            playerCount={2}
            gameDuration={"15 min."}
          />
          <GameCard
            onCardClick={() => setChoice(3)}
            gameName={"Chain Reaction"}
            imgPath={"../../images/banners/chain-reaction.png"}
            playerCount={4}
            gameDuration={"15 min."}
          />
          <GameCard
            gameName={"Battleship"}
            imgPath={"../../images/banners/battleship banner.jpg"}
            playerCount={2}
            gameDuration={"20 min."}
          />
          <GameCard
            gameName={"Ludo"}
            imgPath={"../../images/banners/ludo banner-cropped.jpg"}
            playerCount={4}
            gameDuration={"45 min."}
          />
          <GameCard
            gameName={"S&L"}
            imgPath={"../../images/banners/snake-and-ladders-banner.jpg"}
            playerCount={6}
            gameDuration={"30 min."}
          />
          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeholderbanner2.jpg"}
            playerCount={4}
            gameDuration={"5 min."}
          />

          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeHolderBanner.png"}
            playerCount={4}
            gameDuration={"5 min."}
          />
          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeHolderBanner3.jpg"}
            playerCount={4}
            gameDuration={"5 min."}
          />
          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeholderbanner2.jpg"}
            playerCount={4}
            gameDuration={"5 min."}
          />
          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeHolderBanner3.jpg"}
            playerCount={4}
            gameDuration={"5 min."}
          />

          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeholder-banner.jpg"}
            playerCount={4}
            gameDuration={"5 min."}
          />
          <GameCard
            gameName={"Game Name"}
            imgPath={"../../images/banners/placeHolderBanner.png"}
            playerCount={4}
            gameDuration={"5 min."}
          />
        </div>
      </div>
    );
  }
}

export default App;
