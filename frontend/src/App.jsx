import TicTacToe from "./pages/tictactoe/tictactoe"
import Header from "./components/header/header"
import GameCard from "./components/gameCard/GameCard";
import { useState } from "react"
function App() {

  const [choice, setChoice] = useState(0);


  if (choice == 1) {
    return (
      <>
        <Header text={"Tic Tac Toe"} onImgClick={() => setChoice(0)} />
        <TicTacToe />

      </>
    );
  }
  else {
    return (
      <>
        <Header text={"Mini Games"} onImgClick={() => setChoice(0)} />
        <div className="cardList">
          <GameCard onCardClick={() => setChoice(1)} imgPath={"src/assets/banners/tictactoe-banner.png"} gameName={"Tic Tac Toe"} playerCount={2} gameDuration={"1 min."} />
          <GameCard gameName={"Battleship"} imgPath={"src/assets/banners/battleship banner.jpg"} playerCount={2} gameDuration={"20 min."} />
          <GameCard gameName={"Connect 4"} imgPath={"src/assets/banners/connect 4 banner.jpg"} playerCount={2} gameDuration={"15 min."} />
          <GameCard gameName={"Ludo"} imgPath={"src/assets/banners/ludo banner-cropped.jpg"} playerCount={4} gameDuration={"45 min."} />
          <GameCard gameName={"S&L"} imgPath={"src/assets/banners/snake-and-ladders-banner.jpg"} playerCount={6} gameDuration={"30 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
          <GameCard gameName={"Game Name"} imgPath={"src/assets/placeholder-banner.jpg"} playerCount={4} gameDuration={"5 min."} />
        </div>
      </>
    );
  }

}

export default App
