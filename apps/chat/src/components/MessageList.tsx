import React, { useEffect, useRef } from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const theme = {
  colors: {
    primary: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    light: '#f1f5f9',
    white: '#ffffff',
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
  },
  borderRadius: {
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  fontSize: {
    xs: '0.75rem',
    base: '1rem',
  },
};

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const containerStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: theme.spacing.md,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  };

  const messageStyle = (isUser: boolean): React.CSSProperties => ({
    maxWidth: '70%',
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });

  const bubbleStyle = (isUser: boolean): React.CSSProperties => ({
    padding: `${theme.spacing.md} 1.25rem`,
    background: isUser ? theme.colors.primary : theme.colors.light,
    color: isUser ? theme.colors.white : theme.colors.text.primary,
    borderRadius: theme.borderRadius.xl,
    wordBreak: 'break-word',
    boxShadow: isUser ? '0 4px 6px -1px rgba(29, 78, 216, 0.4)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    maxWidth: '100%',
  });

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div style={containerStyle}>
      {messages.map((message) => (
        <div key={message.id} style={messageStyle(message.sender === 'user')}>
          <div style={bubbleStyle(message.sender === 'user')}>
            {message.text}
          </div>
          <div
            style={{
              fontSize: theme.fontSize.xs,
              color: theme.colors.text.secondary,
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
            }}
          >
            {formatTime(message.timestamp)}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
