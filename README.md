# Micro-Frontend Architecture

A production-ready Micro-Frontend Architecture built with React 18, TypeScript, and Webpack Module Federation.

## 🏗️ Architecture Overview

This project demonstrates a modern micro-frontend architecture with three applications:

- **Host Application** (Port 3000) - Main container with design system and routing
- **Chat Micro-Frontend** (Port 3001) - Standalone chat application
- **Email Micro-Frontend** (Port 3002) - Standalone email application

### Key Features

✅ **Module Federation** - Webpack 5 Module Federation for runtime integration  
✅ **Design System** - Shared, reusable UI components  
✅ **Event-Driven Communication** - Custom event bus for inter-app messaging  
✅ **Independent Deployment** - Each app can be deployed separately  
✅ **Type Safety** - Full TypeScript support  
✅ **Modern React** - React 18 with hooks and best practices  

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Micro-Frontend-Architecture-
```

2. **Install dependencies for all applications**
```bash
npm install
cd apps/host && npm install
cd ../chat && npm install
cd ../email && npm install
cd ../..
```

### Running the Application

#### Option 1: Run all applications concurrently (Recommended)
```bash
npm run dev
```

#### Option 2: Run applications individually
```bash
# Terminal 1 - Host Application
npm run dev:host

# Terminal 2 - Chat Application
npm run dev:chat

# Terminal 3 - Email Application
npm run dev:email
```

### Accessing the Applications

- **Main Application**: http://localhost:3000
- **Chat (Standalone)**: http://localhost:3001
- **Email (Standalone)**: http://localhost:3002

## 📁 Project Structure

```
Micro-Frontend-Architecture-/
├── apps/
│   ├── host/                    # Main container application
│   │   ├── src/
│   │   │   ├── design-system/  # Shared UI components
│   │   │   │   ├── components/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   └── Badge.tsx
│   │   │   │   └── theme.ts
│   │   │   ├── components/
│   │   │   │   └── Layout.tsx
│   │   │   ├── pages/
│   │   │   │   └── Home.tsx
│   │   │   ├── utils/
│   │   │   │   └── eventBus.ts  # Inter-app communication
│   │   │   ├── types/
│   │   │   │   └── remotes.d.ts
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   ├── webpack.config.js
│   │   └── package.json
│   │
│   ├── chat/                    # Chat micro-frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ContactList.tsx
│   │   │   │   ├── MessageList.tsx
│   │   │   │   └── MessageInput.tsx
│   │   │   ├── data/
│   │   │   │   └── mockData.ts
│   │   │   ├── hooks/
│   │   │   │   └── useEventBus.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   ├── webpack.config.js
│   │   └── package.json
│   │
│   └── email/                   # Email micro-frontend
│       ├── src/
│       │   ├── components/
│       │   │   ├── FolderList.tsx
│       │   │   ├── EmailList.tsx
│       │   │   └── EmailDetail.tsx
│       │   ├── data/
│       │   │   └── mockData.ts
│       │   ├── hooks/
│       │   │   └── useEventBus.ts
│       │   ├── types/
│       │   │   └── index.ts
│       │   ├── App.tsx
│       │   └── index.tsx
│       ├── webpack.config.js
│       └── package.json
│
├── package.json
└── README.md
```

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Host Application                         │
│                      (Port 3000)                            │
│  ┌────────────────────────────────────────────────────┐    │
│  │                  Design System                      │    │
│  │  • Button  • Card  • Input  • Badge  • Theme       │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │                   Event Bus                         │    │
│  │         (Global Communication Layer)                │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │                    Routing                          │    │
│  │         • /         → Home                          │    │
│  │         • /chat     → Chat MFE                      │    │
│  │         • /email    → Email MFE                     │    │
│  └────────────────────────────────────────────────────┘    │
└───────────┬──────────────────────────────┬──────────────────┘
            │                              │
            │                              │
            ▼                              ▼
┌───────────────────────┐      ┌──────────────────────┐
│   Chat MFE            │      │   Email MFE          │
│   (Port 3001)         │      │   (Port 3002)        │
│                       │      │                      │
│  Exposes:             │      │  Exposes:            │
│  • ./App              │      │  • ./App             │
│                       │      │                      │
│  Features:            │      │  Features:           │
│  • Contact List       │      │  • Folder List       │
│  • Messages           │      │  • Email List        │
│  • Real-time Chat     │      │  • Email Viewer      │
│  • Unread Badges      │      │  • Unread Badges     │
└───────────────────────┘      └──────────────────────┘
```

## Component Communication

### Event Bus Pattern

```
Chat App                Host App               Email App
   │                       │                       │
   │  emit('chat:unread')  │                       │
   ├──────────────────────>│                       │
   │                       │                       │
   │                       │  emit('email:unread') │
   │                       │<──────────────────────┤
   │                       │                       │
   │                       │ Update Navigation     │
   │                       │ Badges                │
   │                       │                       │
```


## 🎨 Design System

The host application provides a shared design system with:

### Components
- **Button** - Primary, secondary, danger, and outline variants
- **Card** - Container with optional hover effects
- **Input** - Form inputs with labels
- **Badge** - Status indicators

### Theme
Centralized theme configuration including:
- Colors (primary, secondary, success, danger, etc.)
- Spacing scale
- Typography scale
- Border radius
- Shadows

### Usage Example
```tsx
import { Button, Card, theme } from '../design-system';

<Card title="Example">
  <Button variant="primary" onClick={handleClick}>
    Click me
  </Button>
</Card>
```

## 🔄 Inter-Application Communication

### Event Bus Architecture

The applications communicate via a global event bus:

```typescript
// Emitting events
eventBus.emit('chat:unread', 5);
eventBus.emit('email:unread', 3);

// Subscribing to events
const unsubscribe = eventBus.subscribe('chat:unread', (count) => {
  console.log('Unread chats:', count);
});
```

### Communication Flow

1. **Chat/Email apps** emit unread counts via event bus
2. **Host app** subscribes to these events
3. **Navigation badges** update in real-time

## 🏛️ Module Federation Configuration

### Host Application
```javascript
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    chat: 'chat@http://localhost:3001/remoteEntry.js',
    email: 'email@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### Chat/Email Applications
```javascript
new ModuleFederationPlugin({
  name: 'chat', // or 'email'
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

## 🔑 Key Architectural Decisions

### 1. Module Federation over Single-SPA
**Reason**: Native Webpack 5 support, better performance, simpler configuration

### 2. Event Bus for Communication
**Reason**: Decoupled architecture, easy to test, no direct dependencies between apps

### 3. Shared Dependencies (singleton)
**Reason**: Prevents multiple React instances, reduces bundle size

### 4. Independent Styling
**Reason**: Each app can be styled independently while sharing the design system

### 5. TypeScript Throughout
**Reason**: Type safety, better developer experience, fewer runtime errors

## 📦 Build and Deployment

### Build All Applications
```bash
npm run build
```

### Build Individual Applications
```bash
npm run build:host
npm run build:chat
npm run build:email
```

### Deployment Strategy

Each micro-frontend can be deployed independently:

1. **Chat App** - Deploy to CDN or static hosting
2. **Email App** - Deploy to CDN or static hosting
3. **Host App** - Update remote URLs in webpack config, then deploy

### Environment-Specific Configuration

Update `webpack.config.js` for each environment:

```javascript
// Production example
remotes: {
  chat: 'chat@https://chat.yourdomain.com/remoteEntry.js',
  email: 'email@https://email.yourdomain.com/remoteEntry.js',
}
```

## 🧪 Testing Approach

### Unit Testing
Each component should be tested independently using Jest and React Testing Library.

### Integration Testing
Test the Module Federation integration and event bus communication.

### E2E Testing
Use tools like Cypress or Playwright to test the complete user flow.

## 🔮 Future Enhancements

### Scalability Features
- **State Management** - Add Redux or Zustand for complex state
- **Authentication** - Implement shared authentication across apps
- **Error Boundary** - Enhanced error handling and fallbacks
- **Performance Monitoring** - Add analytics and performance tracking
- **Lazy Loading** - Optimize bundle sizes with code splitting
- **Service Worker** - Add offline support and caching
- **CI/CD Pipeline** - Automate testing and deployment
- **Micro-Frontend Registry** - Dynamic micro-frontend discovery

### Additional Micro-Frontends
The architecture supports easy addition of new micro-frontends:

1. Create new app in `apps/` directory
2. Configure Module Federation
3. Add remote to host application
4. Update routing if needed

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Webpack 5** - Module bundler with Module Federation
- **Babel** - JavaScript compiler
- **React Router** - Client-side routing (host app)

## 📝 Development Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow consistent naming conventions
- Organize by feature, not by type

### Performance
- Use React.memo for expensive components
- Implement proper code splitting
- Optimize bundle sizes
- Monitor runtime performance

### Maintainability
- Write self-documenting code
- Keep dependencies up to date
- Use consistent code style
- Document architectural decisions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request



## 🙋 Support

For questions or issues, please open an issue in the GitHub repository.

