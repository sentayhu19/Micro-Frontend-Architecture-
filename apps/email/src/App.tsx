import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Card, Button } from 'host/design-system'
import bus from 'host/event-bus'

type Mail = { id: string; from: string; subject: string }

export default function Email() {
  const [mails, setMails] = useState<Mail[]>([
    { id: '1', from: 'team@company.com', subject: 'Welcome' },
    { id: '2', from: 'noreply@updates.com', subject: 'Your weekly digest' },
  ])

  useEffect(() => {
    const off = bus.on<string>('chat:send', v => {
      setMails(prev => [{ id: String(Date.now()), from: 'chat@user', subject: v }, ...prev])
      bus.emit('email:reply', 'Auto-reply to: ' + v)
    })
    return () => off()
  }, [])

  const empty = useMemo(() => mails.length === 0, [mails])

  return (
    <div>
      <h2>Email</h2>
      <Card>
        {empty ? (
          <div className="empty">No emails</div>
        ) : (
          <ul className="list">
            {mails.map(m => (
              <li key={m.id} className="row">
                <span className="from">{m.from}</span>
                <span className="subj">{m.subject}</span>
                <Button onClick={() => bus.emit('email:open', m.id)}>Open</Button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
