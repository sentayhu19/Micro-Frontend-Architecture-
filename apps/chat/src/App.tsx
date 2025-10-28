import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Card, Button } from 'host/design-system'
import bus from 'host/event-bus'

export default function Chat() {
  const [messages, setMessages] = useState<string[]>(['Hello'])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const off = bus.on<string>('email:reply', m => setMessages(prev => [...prev, m]))
    return () => off()
  }, [])

  function send() {
    const v = inputRef.current?.value?.trim()
    if (!v) return
    setMessages(prev => [...prev, v])
    inputRef.current!.value = ''
    bus.emit('chat:send', v)
  }

  return (
    <div>
      <h2>Chat</h2>
      <Card>
        <div className="chat-box">
          {messages.map((m, i) => (
            <div key={i} className={i % 2 ? 'msg me' : 'msg'}>{m}</div>
          ))}
        </div>
        <div className="chat-actions">
          <input ref={inputRef} placeholder="Type a message" />
          <Button variant="primary" onClick={send}>Send</Button>
        </div>
      </Card>
    </div>
  )
}
