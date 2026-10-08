import { useMemo, useState } from 'react'
import { LabShell } from '../components/LabShell'
import { getLabById } from '../data/components'
import {
  dealFourHands,
  formatCard,
  makeDeck,
  shuffle,
  type Card,
} from '../lib/deck'

const SEATS = ['Eva', 'Taq', 'Fred', 'Joe'] as const

export function DeckLab() {
  const component = getLabById('deck')!
  const [seedTick, setSeedTick] = useState(0)

  const { hands, top } = useMemo(() => {
    void seedTick
    const deck = shuffle(makeDeck())
    return { hands: dealFourHands(deck), top: deck[0] as Card | undefined }
  }, [seedTick])

  return (
    <LabShell component={component}>
      <div className="deck-lab">
        <div className="deck-lab__actions">
          <button type="button" onClick={() => setSeedTick((n) => n + 1)}>
            Shuffle & deal
          </button>
          <p className="deck-lab__meta">
            Deck size 52 · 4×13 · sample top after shuffle:{' '}
            <strong>{top ? formatCard(top) : '—'}</strong>
          </p>
        </div>

        <div className="deck-lab__hands">
          {SEATS.map((name, i) => (
            <div key={name} className="hand">
              <h3>
                {name}{' '}
                <span className="hand__count">{hands[i].length}</span>
              </h3>
              <ul className="hand__cards">
                {hands[i].map((card) => (
                  <li
                    key={card.id}
                    className={
                      card.suit === 'H' || card.suit === 'D'
                        ? 'card card--red'
                        : 'card'
                    }
                  >
                    {formatCard(card)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <details className="lab-checks">
          <summary>Manual checks</summary>
          <ul>
            <li>Fresh shuffle changes order</li>
            <li>Each hand has exactly 13 cards</li>
            <li>All 52 ids unique across hands (spot-check)</li>
          </ul>
        </details>
      </div>
    </LabShell>
  )
}
