# Chat Micro-Frontend

Standalone chat application integrated via Module Federation.

## Features

- 💬 Real-time messaging interface
- 👥 Contact list with online status
- 📊 Unread message tracking
- ⚡ Event bus integration
- 📱 Responsive design

## Components

### ContactList
Displays all chat contacts with:
- Avatar and name
- Online status indicator
- Last message preview
- Unread message badge

### MessageList
Shows conversation messages with:
- User vs other sender distinction
- Timestamp formatting
- Auto-scroll to latest message
- Message bubbles

### MessageInput
Text input with:
- Send button
- Enter key support
- Input validation

## Data Structure

```typescript
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
  read: boolean;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unreadCount: number;
  online: boolean;
}
```

## Event Bus Integration

Emits `chat:unread` event when unread count changes:
```typescript
eventBus.emit('chat:unread', unreadCount);
```

## Module Federation

### Exposes
- `./App` - Main Chat application component

### Can be used by
- Host application at `/chat` route
- Standalone at http://localhost:3001

## Running

```bash
npm run dev    # Development server on port 3001
npm run build  # Production build
npm run serve  # Serve production build
```

## Port

Runs on **http://localhost:3001**
