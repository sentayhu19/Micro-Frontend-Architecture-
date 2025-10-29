import React from 'react';
import { theme } from '../theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  const getBackground = () => {
    if (variant === 'outline') return 'transparent';
    return theme.colors.white;
  };

  const getColor = () => {
    if (variant === 'outline') return theme.colors.primary;
    if (variant === 'danger') return theme.colors.danger;
    return theme.colors.primary;
  };

  const styles: React.CSSProperties = {
    padding: size === 'sm' ? '0.625rem 1.25rem' : size === 'lg' ? '0.875rem 2rem' : '0.75rem 1.5rem',
    fontSize: size === 'sm' ? theme.fontSize.sm : size === 'lg' ? theme.fontSize.lg : theme.fontSize.base,
    fontWeight: '700',
    borderRadius: theme.borderRadius.lg,
    border: variant === 'outline' ? `2px solid ${theme.colors.primary}` : `2px solid ${theme.colors.border}`,
    background: getBackground(),
    color: getColor(),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: variant === 'outline' ? 'none' : theme.shadows.lg,
    letterSpacing: '0.01em',
  };

  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = variant === 'outline' ? theme.shadows.md : theme.shadows.lg;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = variant === 'outline' ? 'none' : theme.shadows.md;
      }}
    >
      {children}
    </button>
  );
};
