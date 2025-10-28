declare module 'host/design-system' {
  import * as React from 'react'
  export const ThemeProvider: React.ComponentType<React.PropsWithChildren>
  export const Header: React.ComponentType<{ title: string; right?: React.ReactNode }>
  export const Card: React.ComponentType<React.PropsWithChildren>
  export const Button: React.ComponentType<React.PropsWithChildren<{ onClick?: () => void; variant?: 'default' | 'primary' }>>
}

declare module 'host/event-bus' {
  export type Handler<T> = (payload: T) => void
  export interface Bus {
    on<T>(event: string, handler: Handler<T>): () => void
    off<T>(event: string, handler: Handler<T>): void
    emit<T>(event: string, payload: T): void
  }
  const bus: Bus
  export default bus
}
