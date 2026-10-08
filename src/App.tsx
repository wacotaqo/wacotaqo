import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LAB_COMPONENTS } from './data/components'
import { DeckLab } from './labs/DeckLab'
import { Hub } from './pages/Hub'
import { LabPlaceholder } from './pages/LabPlaceholder'
import './index.css'

function PlaceholderRoute({ id }: { id: string }) {
  const component = LAB_COMPONENTS.find((c) => c.id === id)
  if (!component) return <Navigate to="/" replace />
  return <LabPlaceholder component={component} />
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-frame">
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/lab/deck" element={<DeckLab />} />
          <Route path="/lab/access" element={<PlaceholderRoute id="access" />} />
          <Route path="/lab/lobby" element={<PlaceholderRoute id="lobby" />} />
          <Route path="/lab/rules" element={<PlaceholderRoute id="rules" />} />
          <Route path="/lab/turns" element={<PlaceholderRoute id="turns" />} />
          <Route
            path="/lab/scoring"
            element={<PlaceholderRoute id="scoring" />}
          />
          <Route path="/lab/match" element={<PlaceholderRoute id="match" />} />
          <Route path="/lab/ui" element={<PlaceholderRoute id="ui" />} />
          <Route path="/lab/sync" element={<PlaceholderRoute id="sync" />} />
          <Route
            path="/lab/delight"
            element={<PlaceholderRoute id="delight" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
