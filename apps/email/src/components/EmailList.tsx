import React from 'react';
import { Email } from '../types';

interface EmailListProps {
  emails: Email[];
  selectedEmail: string | null;
  onSelectEmail: (id: string) => void;
}

const theme = {
  colors: {
    primary: '#3b82f6',
    warning: '#f59e0b',
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
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
  },
};

export const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmail,
  onSelectEmail,
}) => {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  const emailItemStyle = (isSelected: boolean, isRead: boolean): React.CSSProperties => ({
    padding: theme.spacing.md,
    cursor: 'pointer',
    backgroundColor: isSelected ? theme.colors.light : theme.colors.white,
    borderBottom: `1px solid ${theme.colors.border}`,
    transition: 'all 0.2s ease',
    fontWeight: isRead ? '400' : '600',
  });

  const headerRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  };

  const timeStyle: React.CSSProperties = {
    fontSize: theme.fontSize.sm,
    color: theme.colors.text.secondary,
  };

  const starStyle = (starred: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    marginLeft: theme.spacing.sm,
    color: starred ? theme.colors.warning : theme.colors.text.secondary,
  });

  return (
    <div style={{ overflowY: 'auto', flex: 1 }}>
      {emails.map((email) => (
        <div
          key={email.id}
          style={emailItemStyle(selectedEmail === email.id, email.read)}
          onClick={() => onSelectEmail(email.id)}
          onMouseEnter={(e) => {
            if (selectedEmail !== email.id) {
              e.currentTarget.style.backgroundColor = theme.colors.light;
            }
          }}
          onMouseLeave={(e) => {
            if (selectedEmail !== email.id) {
              e.currentTarget.style.backgroundColor = theme.colors.white;
            }
          }}
        >
          <div style={headerRowStyle}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <span style={{ color: theme.colors.text.primary }}>{email.from}</span>
              <span style={starStyle(email.starred)}>{email.starred ? '⭐' : '☆'}</span>
            </div>
            <span style={timeStyle}>{formatTime(email.timestamp)}</span>
          </div>
          <div style={{ color: theme.colors.text.primary, marginBottom: '4px' }}>
            {email.subject}
          </div>
          <div style={{ fontSize: theme.fontSize.sm, color: theme.colors.text.secondary }}>
            {email.preview}
          </div>
        </div>
      ))}
    </div>
  );
};
