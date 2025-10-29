# Host Application

The main container application that orchestrates the micro-frontend architecture.

## Responsibilities

- **Routing** - Handle navigation between micro-frontends
- **Design System** - Provide shared UI components
- **Event Bus** - Facilitate inter-app communication
- **Layout** - Consistent header and navigation

## Design System Components

### Button
```tsx
import { Button } from './design-system';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card
```tsx
import { Card } from './design-system';

<Card title="Title" hoverable>
  <p>Content goes here</p>
</Card>
```

### Input
```tsx
import { Input } from './design-system';

<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  fullWidth
/>
```

### Badge
```tsx
import { Badge } from './design-system';

<Badge variant="danger">3</Badge>
```

## Module Federation Configuration

### Remotes
- `chat` - Chat micro-frontend
- `email` - Email micro-frontend

### Shared Dependencies
- React 18 (singleton)
- React-DOM 18 (singleton)

## Running

```bash
npm run dev    # Development server on port 3000
npm run build  # Production build
npm run serve  # Serve production build
```

## Port

Runs on **http://localhost:3000**
