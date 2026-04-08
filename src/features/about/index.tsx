import { aboutContent } from '@data'
import './styles.scss'

function About() {
  return (
    <main className="about">
      <span className="about__badge">{aboutContent.badge}</span>
      <h1 className="about__title">{aboutContent.title}</h1>
      <p className="about__text">{aboutContent.description}</p>
      <ul className="about__list">
        {aboutContent.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="about__note">{aboutContent.note}</div>
    </main>
  )
}

export default About
