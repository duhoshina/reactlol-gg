import './Game.css';
import { useState, useRef } from 'react'

const Game = ({ verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score}) => {

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }

  return (
    <>
      <div className="container mobile glass">
        <div className="container-head">
          <span>Pontuação: {score}</span>
          <h1>Adivinhe o campeão</h1>
          <p>Você tem {guesses} tentativas</p>
          <h3 className="tip">Dica: {pickedCategory}</h3>
        </div>
        <div className="wordContainer">
            {letters.map((letter, i) => (
              guessedLetters.includes(letter) ? (
                <span key={i} className="letter">{letter}</span>
              ) : (
                <span key={i} className="blankSquare"></span>
              )
            ))}
        </div>
        <div className="container-game">
          <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="letter" maxLength='1' required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
              <button>Jogar</button>
            </form>
          </div>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas: </p>
            {wrongLetters.map((letter, i) => (
              <span key={i}>{letter}, </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Game