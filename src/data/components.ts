export type LabStatus = 'not_started' | 'in_progress' | 'done' | 'parked'

export type LabComponent = {
  id: string
  code: string
  name: string
  route: string
  proves: string
  dependsOn: string[]
  wave: 'A' | 'B' | 'C' | 'D'
  status: LabStatus
}

export const LAB_COMPONENTS: LabComponent[] = [
  {
    id: 'access',
    code: 'C1',
    name: 'Seats & access',
    route: '/lab/access',
    proves:
      'Join with family code or magic-link stub; claim named seat; persist session; kick/reset seat.',
    dependsOn: [],
    wave: 'B',
    status: 'not_started',
  },
  {
    id: 'lobby',
    code: 'C2',
    name: 'Lobby & presence',
    route: '/lab/lobby',
    proves:
      'Who is seated / online / ready; start gated on 4 ready; leave; invite link copy.',
    dependsOn: ['C1'],
    wave: 'B',
    status: 'not_started',
  },
  {
    id: 'deck',
    code: 'C3',
    name: 'Deck & cards',
    route: '/lab/deck',
    proves:
      '52-card model, shuffle, deal 13×4, hand UI, play-to-trick animation stub.',
    dependsOn: [],
    wave: 'A',
    status: 'in_progress',
  },
  {
    id: 'rules',
    code: 'C4',
    name: 'Rules engine (play)',
    route: '/lab/rules',
    proves:
      'Legal moves for follow-suit / trump; trick winner; Domino order; contract call constraints.',
    dependsOn: ['C3'],
    wave: 'A',
    status: 'not_started',
  },
  {
    id: 'turns',
    code: 'C5',
    name: 'Turn lifecycle',
    route: '/lab/turns',
    proves:
      'Whose turn; play card; advance; nudge; reconnect mid-trick without double-play.',
    dependsOn: ['C4'],
    wave: 'C',
    status: 'not_started',
  },
  {
    id: 'scoring',
    code: 'C6',
    name: 'Scoring',
    route: '/lab/scoring',
    proves:
      'Outcome → points for all 7 contracts; Brothers/Book; Halmstad fixture totals.',
    dependsOn: [],
    wave: 'A',
    status: 'not_started',
  },
  {
    id: 'match',
    code: 'C7',
    name: 'Match orchestration',
    route: '/lab/match',
    proves:
      '28 hands; caller rotation; each contract once per player; match over; reset confirm.',
    dependsOn: ['C4', 'C5', 'C6'],
    wave: 'A',
    status: 'not_started',
  },
  {
    id: 'ui',
    code: 'C8',
    name: 'Table UI chrome',
    route: '/lab/ui',
    proves:
      'Mobile table layout; standings strip; hand n/28; to-call marker; usable at ~320px.',
    dependsOn: ['C3'],
    wave: 'B',
    status: 'not_started',
  },
  {
    id: 'sync',
    code: 'C9',
    name: 'Realtime sync',
    route: '/lab/sync',
    proves:
      'Shared table state across 2+ browsers; safe reconnect; disconnect banner.',
    dependsOn: ['C5'],
    wave: 'C',
    status: 'not_started',
  },
  {
    id: 'delight',
    code: 'C10',
    name: 'Delight',
    route: '/lab/delight',
    proves: 'One wow: nudge pulse, trick flash, or reactions — pick later.',
    dependsOn: ['C8'],
    wave: 'D',
    status: 'parked',
  },
]

export function getLabById(id: string): LabComponent | undefined {
  return LAB_COMPONENTS.find((c) => c.id === id)
}

export const STATUS_LABEL: Record<LabStatus, string> = {
  not_started: 'Not started',
  in_progress: 'In progress',
  done: 'Done',
  parked: 'Parked',
}
