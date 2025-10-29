import React from 'react';
import { theme } from '../theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
}) => {
  const backgroundColor = 
    variant === 'primary' ? theme.colors.primary :
    variant === 'success' ? theme.colors.success :
    variant === 'warning' ? theme.colors.warning :
    theme.colors.danger;

  const styles: React.CSSProperties = {
    display: 'inline-block',
    padding: size === 'sm' ? '0.25rem 0.6rem' : '0.375rem 0.875rem',
    fontSize: size === 'sm' ? theme.fontSize.xs : theme.fontSize.sm,
    fontWeight: '700',
    color: theme.colors.white,
    backgroundColor,
    borderRadius: theme.borderRadius.full,
    whiteSpace: 'nowrap',
    boxShadow: theme.shadows.sm,
    letterSpacing: '0.02em',
  };

  return <span style={styles}>{children}</span>;
};
