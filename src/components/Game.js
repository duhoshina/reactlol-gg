import './Game.css';

const Game = ({ verifyLetter }) => {
  return (
    <>
      <div className="container mobile glass">
        <h1>reactlol.gg</h1>
        <div className="container-game">

        </div>
        <button onClick={verifyLetter}>Finalizar jogo</button>
      </div>
    </>
  )
}

export default Game