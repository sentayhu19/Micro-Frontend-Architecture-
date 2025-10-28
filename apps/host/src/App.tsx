import * as React from 'react'
import { Suspense, useMemo } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { ThemeProvider, Header, Card, Button } from './design-system'
import ErrorBoundary from './ErrorBoundary'

const Chat = React.lazy(() => import('chat/App'))
const Email = React.lazy(() => import('email/App'))

export default function App() {
  const navRight = useMemo(() => (
    <div className="nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/chat">Chat</NavLink>
      <NavLink to="/email">Email</NavLink>
    </div>
  ), [])

  return (
    <ThemeProvider>
      <Header title="Host" right={navRight} />
      <div className="container grid">
        <div className="card">
          <div className="actions">
            <Button variant="primary" onClick={() => import('email/App')}>Preload Email</Button>
            <Button onClick={() => import('chat/App')}>Preload Chat</Button>
          </div>
        </div>
        <div>
          <Card>
            <ErrorBoundary>
              <Suspense fallback={<div>Loading…</div>}>
                <Routes>
                  <Route path="/" element={<div>Welcome</div>} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/email" element={<Email />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Card>
        </div>
      </div>
      <div className="container"><footer>Micro-Frontend Architecture</footer></div>
    </ThemeProvider>
  )
}
