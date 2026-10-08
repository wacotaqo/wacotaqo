import { LabShell } from '../components/LabShell'
import type { LabComponent } from '../data/components'

export function LabPlaceholder({ component }: { component: LabComponent }) {
  return (
    <LabShell component={component}>
      <div className="placeholder">
        <p className="placeholder__eyebrow">Sandbox</p>
        <h2>Ready for implementation</h2>
        <p>
          This route is the playground for <strong>{component.code}</strong>.
          Interactive controls and unit-check lists land here as we build Wave{' '}
          {component.wave}.
        </p>
        <ul className="placeholder__checks">
          <li>Module API sketched</li>
          <li>Interactive controls</li>
          <li>Manual / automated checks green</li>
          <li>Status flipped to Done on the hub</li>
        </ul>
      </div>
    </LabShell>
  )
}
