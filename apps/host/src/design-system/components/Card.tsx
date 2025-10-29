import React from 'react';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  padding = 'md',
  hoverable = false,
}) => {
  const paddingValue = 
    padding === 'sm' ? theme.spacing.md :
    padding === 'lg' ? theme.spacing.xl :
    theme.spacing.lg;

  const cardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.lg,
    padding: paddingValue,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: `1px solid ${theme.colors.borderLight}`,
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: theme.fontSize['2xl'],
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    letterSpacing: '-0.02em',
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = theme.shadows.xl;
          e.currentTarget.style.borderColor = theme.colors.primary;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.lg;
          e.currentTarget.style.borderColor = theme.colors.borderLight;
        }
      }}
    >
      {title && <h3 style={titleStyles}>{title}</h3>}
      {children}
    </div>
  );
};
