import './GameOver.css'

function GameOver({ tryAgain }) {
  return (
    <>
      <div className="container mobile glass">
        <h1>reactlol.gg</h1>
        <div className="container-game">

        </div>
        <button onClick={tryAgain}>Tentar novamente</button>
      </div>
    </>
  )
}

export default GameOver