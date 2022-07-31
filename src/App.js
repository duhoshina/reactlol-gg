
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

function App() {
  const [gameStage, setGameStage] = useState(stageScreen[0].name)
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  // randomizar a categoria
  const pickWordAndCategory = () => {
    // armazenar as propriedades do objeto wordList em uma variavel
    const categoryList = Object.keys(words)

    // selecionar uma categoria aleatoria
    const category = categoryList[Math.floor(Math.random() * Object.keys(categoryList).length)]

    // selecionar uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  // iniciar o jogo
  const startGame = () => {
    // selecionar letra e categoria
    const { word, category } = pickWordAndCategory()

    // criando um array para as letras
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((item) => item.toLowerCase())

    // setar as variaveis
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stageScreen[1].name)
  }

  // validar as letras
  const verifyLetter = () => {
    setGameStage(stageScreen[2].name)
  }

  const tryAgain = () => {
    setGameStage(stageScreen[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <HomePage startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'gameOver' && <GameOver tryAgain={tryAgain}/>}
    </div>
  );
}

export default App;
