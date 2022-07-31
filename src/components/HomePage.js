import './HomePage.css';

function HomePage({ startGame }) {
  return (
    <>
      <div className="container mobile glass">
        <h1>reactlol.gg</h1>
        <div className='container-items'>
          <ul className="container list">
            <li>
              <p>Este é um projeto de estudo da lib React.js</p>
            </li>

            <li>
              <p>O jogo é simples e intuitivo. Lembra do jogo da forca? é parecido..</p>
            </li>

            <li>
              <p>Clique no botão abaixo e comece a jogar.</p>
            </li>
          </ul>
        </div>
        <button onClick={startGame}>jogar!</button>
      </div>
      <span>Desenvolvido por Luis Eduardo Hoshina</span>
    </>
  )
}

export default HomePage