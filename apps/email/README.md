# Email Micro-Frontend

Standalone email application integrated via Module Federation.

## Features

- 📧 Email inbox management
- 📁 Folder organization
- ⭐ Starred messages
- 📊 Unread tracking
- 🔍 Email preview and detail view
- 🏷️ Label system

## Components

### FolderList
Displays email folders:
- Inbox, Sent, Drafts, Starred, Trash
- Unread count badges
- Icon indicators

### EmailList
Shows emails in selected folder:
- Sender information
- Subject and preview
- Read/unread status
- Star toggle
- Timestamp

### EmailDetail
Full email view with:
- Subject and metadata
- Labels
- Email body
- Action buttons (Reply, Forward, Archive)

## Data Structure

```typescript
interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: Date;
  read: boolean;
  starred: boolean;
  labels: string[];
}

interface Folder {
  id: string;
  name: string;
  icon: string;
  count: number;
}
```

## Event Bus Integration

Emits `email:unread` event when unread count changes:
```typescript
eventBus.emit('email:unread', unreadCount);
```

## Module Federation

### Exposes
- `./App` - Main Email application component

### Can be used by
- Host application at `/email` route
- Standalone at http://localhost:3002

## Running

```bash
npm run dev    # Development server on port 3002
npm run build  # Production build
npm run serve  # Serve production build
```

## Port

Runs on **http://localhost:3002**
