import { useState } from 'react' //hook para gerenciar
//estado local (variaveis que mudam)
import reactLogo from './assets/react.svg' //importa a imagem
//do react
import viteLogo from '/vite.svg' //importa a imagem logo
//do vite
import './App.css' //puxando arquivos

//componente App
function App() {
  const [count, setCount] = useState(0)
//retorna a UI - User Interface - interface do usuário
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
//define o que o carro faz. É o componente principal da aplicação
//Ele organiza onde a Navbar fica, quais as Routes(rotas)
//e agrupa todos os outro sub-componentes
//coloco tudo que quero que apareça em todas as páginas

