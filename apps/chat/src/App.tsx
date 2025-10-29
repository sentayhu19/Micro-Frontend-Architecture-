import React, { useState, useEffect, useMemo } from 'react';
import { ContactList } from './components/ContactList';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { mockContacts, mockMessages } from './data/mockData';
import { Contact, Message } from './types';
import { useUnreadCount } from './hooks/useEventBus';

const theme = {
  colors: {
    white: '#ffffff',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  spacing: {
    md: '1rem',
    lg: '1.5rem',
  },
  borderRadius: {
    lg: '0.75rem',
    xl: '1rem',
  },
  fontSize: {
    xl: '1.25rem',
  },
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
};

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(contacts[0]?.id || null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);

  const totalUnread = useMemo(
    () => contacts.reduce((sum, contact) => sum + contact.unreadCount, 0),
    [contacts]
  );

  useUnreadCount(totalUnread);

  const handleSendMessage = (text: string) => {
    if (!selectedContactId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
      read: true,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage],
    }));
  };

  const handleSelectContact = (contactId: string) => {
    setSelectedContactId(contactId);
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId ? { ...contact, unreadCount: 0 } : contact
      )
    );
  };

  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  const currentMessages = selectedContactId ? messages[selectedContactId] || [] : [];

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '350px 1fr',
    gap: theme.spacing.lg,
    height: '80vh',
    maxHeight: '800px',
  };

  const panelStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.lg,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.colors.borderLight}`,
  };

  const headerStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    borderBottom: 'none',
    fontWeight: '800',
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    letterSpacing: '-0.02em',
  };

  const contactsPanelStyle: React.CSSProperties = {
    ...panelStyle,
  };

  const contactsBodyStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: theme.spacing.md,
  };

  const messagesPanelStyle: React.CSSProperties = {
    ...panelStyle,
  };

  const emptyStateStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.text.secondary,
  };

  return (
    <div style={containerStyle}>
      <div style={contactsPanelStyle}>
        <div style={headerStyle}>Conversations</div>
        <div style={contactsBodyStyle}>
          <ContactList
            contacts={contacts}
            selectedContact={selectedContactId}
            onSelectContact={handleSelectContact}
          />
        </div>
      </div>

      <div style={messagesPanelStyle}>
        {selectedContact ? (
          <>
            <div style={headerStyle}>{selectedContact.name}</div>
            <MessageList messages={currentMessages} />
            <MessageInput onSend={handleSendMessage} />
          </>
        ) : (
          <div style={emptyStateStyle}>
            <p>Select a contact to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
