import type { LabStatus } from '../data/components'
import { STATUS_LABEL } from '../data/components'

export function StatusBadge({ status }: { status: LabStatus }) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {STATUS_LABEL[status]}
    </span>
  )
}
