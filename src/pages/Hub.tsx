import { Link } from 'react-router-dom'
import { LAB_COMPONENTS } from '../data/components'
import { StatusBadge } from '../components/StatusBadge'

const WAVES = ['A', 'B', 'C', 'D'] as const

export function Hub() {
  return (
    <div className="hub">
      <header className="hub__hero">
        <p className="hub__brand">barbu-lab</p>
        <h1>Component lab</h1>
        <p className="hub__lede">
          Isolate each Barbu building block, prove it on its own page, then
          assemble. No WacoLabs board yet — graduates later to{' '}
          <code>barbu.wacotaqo.dev</code>.
        </p>
        <ol className="hub__waves">
          <li>
            <strong>Wave A</strong> — truth (deck, scoring, rules, match)
          </li>
          <li>
            <strong>Wave B</strong> — people (access, lobby, UI)
          </li>
          <li>
            <strong>Wave C</strong> — together (turns, sync, assemble)
          </li>
          <li>
            <strong>Wave D</strong> — polish, then graduate
          </li>
        </ol>
      </header>

      {WAVES.map((wave) => {
        const items = LAB_COMPONENTS.filter((c) => c.wave === wave)
        if (items.length === 0) return null
        return (
          <section key={wave} className="hub__wave">
            <h2>Wave {wave}</h2>
            <ul className="hub__list">
              {items.map((c) => (
                <li key={c.id}>
                  <Link to={c.route} className="hub__card-link">
                    <span className="hub__code">{c.code}</span>
                    <span className="hub__name">{c.name}</span>
                    <StatusBadge status={c.status} />
                    <span className="hub__proves">{c.proves}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
