import React from 'react';
import { Contact } from '../types';

interface ContactListProps {
  contacts: Contact[];
  selectedContact: string | null;
  onSelectContact: (id: string) => void;
}

const theme = {
  colors: {
    primary: '#3b82f6',
    success: '#10b981',
    danger: '#ef4444',
    light: '#f3f4f6',
    white: '#ffffff',
    border: '#e5e7eb',
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
  },
  borderRadius: {
    md: '0.5rem',
    full: '9999px',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
  },
};

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  selectedContact,
  onSelectContact,
}) => {
  const contactItemStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    cursor: 'pointer',
    backgroundColor: isSelected ? 'rgba(29, 78, 216, 0.1)' : theme.colors.white,
    borderRadius: theme.borderRadius.md,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: theme.spacing.sm,
    position: 'relative',
    border: isSelected ? '2px solid rgba(29, 78, 216, 0.3)' : '1px solid transparent',
  });

  const avatarStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: theme.borderRadius.full,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 4px 6px -1px rgba(29, 78, 216, 0.3)',
    overflow: 'hidden',
    border: '2px solid white',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const onlineBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: theme.colors.success,
    border: `2px solid ${theme.colors.white}`,
  };

  const unreadBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    borderRadius: theme.borderRadius.full,
    padding: '2px 6px',
    minWidth: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={contactItemStyle(selectedContact === contact.id)}
          onClick={() => onSelectContact(contact.id)}
          onMouseEnter={(e) => {
            if (selectedContact !== contact.id) {
              e.currentTarget.style.backgroundColor = theme.colors.light;
            }
          }}
          onMouseLeave={(e) => {
            if (selectedContact !== contact.id) {
              e.currentTarget.style.backgroundColor = theme.colors.white;
            }
          }}
        >
          <div style={avatarStyle}>
            <img src={contact.avatar} alt={contact.name} style={imageStyle} />
            {contact.online && <div style={onlineBadgeStyle} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>
              {contact.name}
            </div>
            <div style={{ fontSize: theme.fontSize.sm, color: theme.colors.text.secondary, marginTop: '4px' }}>
              {contact.lastMessage}
            </div>
          </div>
          {contact.unreadCount > 0 && (
            <div style={unreadBadgeStyle}>{contact.unreadCount}</div>
          )}
        </div>
      ))}
    </div>
  );
};
