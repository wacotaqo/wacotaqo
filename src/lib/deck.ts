export type Suit = 'S' | 'H' | 'D' | 'C'
export type Rank =
  | 'A'
  | 'K'
  | 'Q'
  | 'J'
  | '10'
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2'

export type Card = {
  suit: Suit
  rank: Rank
  /** Stable id e.g. "H-A" */
  id: string
}

export const SUITS: Suit[] = ['S', 'H', 'D', 'C']
export const RANKS: Rank[] = [
  'A',
  'K',
  'Q',
  'J',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
]

export const SUIT_SYMBOL: Record<Suit, string> = {
  S: '♠',
  H: '♥',
  D: '♦',
  C: '♣',
}

export function cardId(suit: Suit, rank: Rank): string {
  return `${suit}-${rank}`
}

export function makeDeck(): Card[] {
  const deck: Card[] = []
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ suit, rank, id: cardId(suit, rank) })
    }
  }
  return deck
}

/** Fisher–Yates. Pass an RNG for tests; defaults to Math.random. */
export function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Deal 13 cards to each of 4 seats, clockwise from seat 0. */
export function dealFourHands(deck: Card[]): [Card[], Card[], Card[], Card[]] {
  if (deck.length !== 52) {
    throw new Error(`Expected 52 cards, got ${deck.length}`)
  }
  return [
    deck.slice(0, 13),
    deck.slice(13, 26),
    deck.slice(26, 39),
    deck.slice(39, 52),
  ]
}

export function formatCard(card: Card): string {
  return `${card.rank}${SUIT_SYMBOL[card.suit]}`
}
