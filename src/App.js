
// imports para data
import { wordList } from './data/wordList'

// imports para css
import './App.css';

// imports para componentes
import HomePage from './components/HomePage';

// imports para hooks
import { useState, useCallback, useEffect } from 'react'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stageScreen = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'gameOver'}
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stageScreen[0].name)
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  // randomizar a categoria
  const pickWordAndCategory = useCallback(() => {
    // armazenar as propriedades do objeto wordList em uma variavel
    const categoryList = Object.keys(words)

    // selecionar uma categoria aleatoria
    const category = categoryList[Math.floor(Math.random() * Object.keys(categoryList).length)]

    // selecionar uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])

  // iniciar o jogo
  const startGame = useCallback(() => {
    clearLetterStates()

    // selecionar letra e categoria
    const { word, category } = pickWordAndCategory()

    // criando um array para as letras
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((item) => item.toLowerCase())

    // setar as variaveis
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stageScreen[1].name)
  }, [pickWordAndCategory])

  // validar as letras
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // validacao para ver se a letra ja foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)

    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates()

      // resetando todos os states
      setGameStage(stageScreen[2].name)

    }
  }, [guesses])

  // validar se a pessoa ganhou
  useEffect(() => {

    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)

      startGame()
    }

  }, [guessedLetters, letters, startGame])

  const tryAgain = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stageScreen[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <HomePage startGame={startGame} />}
      {gameStage === 'game' && <Game 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      verifyLetter={verifyLetter} 
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score} />}
      {gameStage === 'gameOver' && <GameOver score={score} tryAgain={tryAgain}/>}
    </div>
  );
}

export default App;
