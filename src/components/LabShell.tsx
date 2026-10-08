import { Link } from 'react-router-dom'
import type { LabComponent } from '../data/components'
import { StatusBadge } from './StatusBadge'

type Props = {
  component: LabComponent
  children: React.ReactNode
}

export function LabShell({ component, children }: Props) {
  return (
    <div className="lab-shell">
      <header className="lab-shell__header">
        <Link to="/" className="lab-shell__back">
          ← Hub
        </Link>
        <div className="lab-shell__title-row">
          <p className="lab-shell__code">{component.code}</p>
          <h1>{component.name}</h1>
          <StatusBadge status={component.status} />
        </div>
        <p className="lab-shell__proves">
          <strong>Proves:</strong> {component.proves}
        </p>
        {component.dependsOn.length > 0 && (
          <p className="lab-shell__deps">
            Depends on: {component.dependsOn.join(', ')}
          </p>
        )}
      </header>
      <section className="lab-shell__body">
        {children}
      </section>
    </div>
  )
}
