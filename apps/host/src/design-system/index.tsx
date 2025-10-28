import React, { PropsWithChildren } from 'react'

export function ThemeProvider({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function Header({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="header">
      <div className="brand"><div className="brand-badge"></div> {title}</div>
      <div>{right}</div>
    </div>
  )
}

export function Card({ children }: PropsWithChildren) {
  return <div className="card">{children}</div>
}

export function Button({ children, onClick, variant = 'default' }: PropsWithChildren<{ onClick?: () => void; variant?: 'default'|'primary' }>) {
  return <button className={`btn ${variant === 'primary' ? 'primary' : ''}`} onClick={onClick}>{children}</button>
}
