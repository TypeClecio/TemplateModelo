import { homeContent } from '@data'
import { Link } from 'react-router-dom'
import './styles.scss'

function Home() {
  return (
    <main className="home">
      <span className="home__badge">{homeContent.badge}</span>
      <h1 className="home__title">{homeContent.title}</h1>
      <p className="home__text">
        {homeContent.text} <code>{homeContent.codePath}</code>{' '}
        {homeContent.textContinuation}
      </p>
      <div className="home__card">
        {homeContent.card}
      </div>
      <Link className="home__link" to="/about">
        Ir para About
      </Link>
    </main>
  )
}

export default Home
