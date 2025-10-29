import React from 'react';
import { theme } from '../theme';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  fullWidth = false,
  disabled = false,
  label,
}) => {
  const inputStyles: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    padding: `${theme.spacing.md} 1.25rem`,
    fontSize: theme.fontSize.base,
    border: `2px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: disabled ? theme.colors.light : theme.colors.white,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: theme.spacing.xs,
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.text.primary,
  };

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && <label style={labelStyles}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={inputStyles}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = theme.colors.primary;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.primary}20`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = theme.colors.border;
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
};
