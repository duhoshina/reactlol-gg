import './GameOver.css'

function GameOver({ tryAgain, score }) {
  return (
    <>
      <div className="container mobile glass">
        <h1>reactlol.gg</h1>
        <h3>Fim de jogo!</h3>
        <div className="container-game-over">
          <p>Sua pontuação foi de: {score}</p>
        </div>
        <button onClick={tryAgain}>Tentar novamente</button>
      </div>
    </>
  )
}

export default GameOver