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
        {/* <button onClick={() => setChoice(1)}> Play tic tac toe</button> */}
        <GameCard onCardClick={() => setChoice(1)} gameName={"Tic Tac Toe"} playerCount={2} gameDuration={1}/>
      </>
    );
  }

}

export default App
