import './styles.scss'

function Home() {
  return (
    <main className="home">
      <span className="home__badge">Exemplo</span>
      <h1 className="home__title">React + Vite + TypeScript</h1>
      <p className="home__text">
        Edite <code>src/pages/Home/index.tsx</code> e salve para ver as mudancas.
      </p>
      <div className="home__card">
        Este bloco serve como exemplo simples de estilos locais.
      </div>
    </main>
  )
}

export default Home
