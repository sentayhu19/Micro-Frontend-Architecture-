import React from 'react';
import { Email } from '../types';

interface EmailDetailProps {
  email: Email;
}

const theme = {
  colors: {
    primary: '#1d4ed8',
    primaryLight: '#3b82f6',
    white: '#ffffff',
    border: '#e2e8f0',
    light: '#f1f5f9',
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  borderRadius: {
    md: '0.5rem',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
};

export const EmailDetail: React.FC<EmailDetailProps> = ({ email }) => {
  const containerStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    height: '100%',
    overflowY: 'auto',
  };

  const headerStyle: React.CSSProperties = {
    borderBottom: `2px solid ${theme.colors.border}`,
    paddingBottom: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  };

  const subjectStyle: React.CSSProperties = {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  };

  const metaRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  };

  const fromStyle: React.CSSProperties = {
    fontSize: theme.fontSize.base,
    color: theme.colors.text.primary,
    fontWeight: '600',
  };

  const timeStyle: React.CSSProperties = {
    fontSize: theme.fontSize.sm,
    color: theme.colors.text.secondary,
  };

  const labelsStyle: React.CSSProperties = {
    display: 'flex',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: theme.fontSize.sm,
    padding: '6px 12px',
    background: 'rgba(29, 78, 216, 0.1)',
    color: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    border: '2px solid rgba(29, 78, 216, 0.2)',
    fontWeight: '700',
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: theme.fontSize.base,
    color: theme.colors.text.primary,
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
  };

  const actionsStyle: React.CSSProperties = {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  };

  const buttonStyle: React.CSSProperties = {
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    background: theme.colors.white,
    color: theme.colors.primary,
    border: `2px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={subjectStyle}>{email.subject}</h2>
        <div style={metaRowStyle}>
          <span style={fromStyle}>From: {email.from}</span>
          <span style={timeStyle}>{formatTime(email.timestamp)}</span>
        </div>
        {email.labels.length > 0 && (
          <div style={labelsStyle}>
            {email.labels.map((label) => (
              <span key={label} style={labelStyle}>
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={actionsStyle}>
        <button style={buttonStyle}>Reply</button>
        <button style={{ ...buttonStyle, backgroundColor: theme.colors.text.secondary }}>
          Forward
        </button>
        <button style={{ ...buttonStyle, backgroundColor: theme.colors.text.secondary }}>
          Archive
        </button>
      </div>

      <div style={bodyStyle}>{email.body}</div>
    </div>
  );
};
