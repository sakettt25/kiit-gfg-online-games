import TicTacToe from "./pages/tictactoe/tictactoe"
import Header from "./components/header/header"
import { useState } from "react"
function App() {

  const [choice, setChoice] = useState(null);
  if (choice == 1) {
    return (
      <>
        {/* <Header /> */}
        <TicTacToe />
      </>
    );
  }
  else {
    return (
      <>
        <Header />
        <button onClick={() => setChoice(1)}> Play tic tac toe</button>
      </>
    );
  }

}

export default App
