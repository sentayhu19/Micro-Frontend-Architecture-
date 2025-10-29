import React, { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const theme = {
  colors: {
    primary: '#1d4ed8',
    white: '#ffffff',
    border: '#e2e8f0',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
  },
  borderRadius: {
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
  fontSize: {
    base: '1rem',
  },
};

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const containerStyle: React.CSSProperties = {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderTop: `1px solid ${theme.colors.border}`,
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    gap: theme.spacing.sm,
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: `${theme.spacing.md} 1.25rem`,
    fontSize: theme.fontSize.base,
    border: `2px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.full,
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const buttonStyle: React.CSSProperties = {
    padding: `${theme.spacing.md} 1.75rem`,
    background: theme.colors.white,
    color: theme.colors.primary,
    border: `2px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.full,
    fontWeight: '700',
    cursor: 'pointer',
    minWidth: '100px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Send
        </button>
      </form>
    </div>
  );
};
