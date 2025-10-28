# Micro-Frontend Architecture (Vite + React + Module Federation)

## Overview

- **Host Application**: `apps/host/` manages routing, design system, and exposes shared modules.
- **Chat Micro-Frontend**: `apps/chat/` standalone chat UI, consumed by host.
- **Email Micro-Frontend**: `apps/email/` standalone email UI, consumed by host.
- **Integration**: Vite Module Federation (`@originjs/vite-plugin-federation`) with shared React runtime, lazy loading, and a lightweight event bus for cross-app communication.

## Tech Stack

- **Framework**: React + TypeScript + Vite
- **Micro-FE**: Module Federation via `@originjs/vite-plugin-federation`
- **Routing**: `react-router-dom` in host
- **Styling**: CSS with responsive layout

## Monorepo Structure

```
apps/
  host/
    src/
      App.tsx
      main.tsx
      styles.css
      design-system/
      event-bus.ts
      ErrorBoundary.tsx
    vite.config.ts
    package.json
  chat/
    src/
      App.tsx
      main.tsx
      styles.css
      types/
    vite.config.ts
    package.json
  email/
    src/
      App.tsx
      main.tsx
      styles.css
      types/
    vite.config.ts
    package.json
```

## Setup

```bash
# install root deps (concurrently, vite tooling)
npm install

# install all app deps
npm run postinstall
```

If you prefer manual installs, run:
```bash
npm --prefix apps/host i
npm --prefix apps/chat i
npm --prefix apps/email i
```

## Run

- **Run all apps** (recommended):
```bash
npm run dev:all
```
This starts:
- Host at http://localhost:5173
- Chat at http://localhost:5174
- Email at http://localhost:5175

- **Run individually**:
```bash
npm run dev:host
npm run dev:chat
npm run dev:email
```

## Build and Preview

```bash
npm run build:host && npm run preview:host
npm run build:chat && npm run preview:chat
npm run build:email && npm run preview:email
```

## Design System and Shared Modules

- Host exposes shared modules via Module Federation:
  - `host/design-system`
  - `host/event-bus`
- Remotes declare ambient module types in `apps/*/src/types/federation.d.ts` for type safety.

Design components available:
- `ThemeProvider`
- `Header`
- `Card`
- `Button`

## Communication Between Applications

- A minimal event bus (`apps/host/src/event-bus.ts`) enables decoupled communication.
- Example flows:
  - Chat emits `chat:send` -> Email listens and adds an email, replies with `email:reply`.
  - Chat listens to `email:reply` and appends the message to chat.

## Routing, Error Handling, Performance

- **Routing**: Host uses `react-router-dom` to mount remotes at `/chat` and `/email`.
- **Lazy loading**: Remotes loaded via `React.lazy` to reduce initial bundle.
- **Error boundaries**: `ErrorBoundary` wraps remote routes to contain failures.
- **Prefetch controls**: Host includes buttons to preload remote bundles on demand.
- **Shared singletons**: React and ReactDOM are shared as singletons to avoid duplicate runtimes.

## Responsiveness & UX

- Fluid grid layout with CSS grid.
- Mobile adjustments for email list rows and chat layout.
- Sticky header and accessible buttons.

## Key Files

- `apps/host/vite.config.ts` exposes shared modules and declares remotes.
- `apps/chat/vite.config.ts` and `apps/email/vite.config.ts` expose `./App` and consume host remotes.
- `apps/host/src/design-system/index.tsx` shared UI components.
- `apps/host/src/event-bus.ts` cross-app communication utility.

## Architectural Decisions & Trade-offs

- **Module Federation vs Single-SPA**: MF gives native bundler-level code splitting and shared runtime; simpler integration with Vite. Single-SPA is more framework-agnostic but adds runtime orchestration complexity.
- **Shared React singletons**: Prevents hook mismatches and reduces bundle size.
- **Event bus**: Simple pub/sub keeps remotes decoupled. For larger systems, consider a shared state library or message bus.
- **CSS design system**: Lightweight, no design tokens lib to keep footprint small. Could be replaced with a more robust system (e.g., Tailwind, CSS-in-JS) as scale grows.
- **Build isolation**: Each micro-app builds independently; host references remote entries via URLs, enabling separate deployments.

## Adding New Micro-Apps

1. Create `apps/<name>/` Vite React app.
2. Configure `vite.config.ts` with `federation({ name, filename: 'remoteEntry.js', exposes: { './App': './src/App.tsx' }, remotes: { host: 'http://localhost:5173/assets/remoteEntry.js' }, shared: { react, 'react-dom' } })`.
3. Add route in host and lazy load: `const NewApp = React.lazy(() => import('<name>/App'))`.
4. Optionally consume `host/design-system` and `host/event-bus`.

## Error Handling and DX

- ErrorBoundary contains remote errors.
- Loading fallback during lazy imports.
- TypeScript ambient declarations for remote modules restore IntelliSense.

## Deployment Notes

- In production, host and remotes should serve their `remoteEntry.js` from stable public URLs.
- Configure CI to build and deploy each app independently.

## License

MIT
