import React from 'react';
import { Folder } from '../types';

interface FolderListProps {
  folders: Folder[];
  selectedFolder: string;
  onSelectFolder: (id: string) => void;
}

const theme = {
  colors: {
    primary: '#3b82f6',
    danger: '#ef4444',
    light: '#f3f4f6',
    white: '#ffffff',
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
    base: '1rem',
  },
};

export const FolderList: React.FC<FolderListProps> = ({
  folders,
  selectedFolder,
  onSelectFolder,
}) => {
  const folderItemStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    cursor: 'pointer',
    backgroundColor: isSelected ? 'rgba(29, 78, 216, 0.1)' : 'transparent',
    borderRadius: theme.borderRadius.md,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: theme.spacing.sm,
    border: isSelected ? '2px solid rgba(29, 78, 216, 0.3)' : '1px solid transparent',
  });

  const folderContentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  };

  const countBadgeStyle: React.CSSProperties = {
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    borderRadius: theme.borderRadius.full,
    padding: '2px 8px',
    minWidth: '20px',
    textAlign: 'center',
  };

  return (
    <div>
      {folders.map((folder) => (
        <div
          key={folder.id}
          style={folderItemStyle(selectedFolder === folder.id)}
          onClick={() => onSelectFolder(folder.id)}
          onMouseEnter={(e) => {
            if (selectedFolder !== folder.id) {
              e.currentTarget.style.backgroundColor = theme.colors.light;
            }
          }}
          onMouseLeave={(e) => {
            if (selectedFolder !== folder.id) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          <div style={folderContentStyle}>
            <span style={{ fontSize: '20px' }}>{folder.icon}</span>
            <span style={{ fontWeight: selectedFolder === folder.id ? '600' : '500' }}>
              {folder.name}
            </span>
          </div>
          {folder.count > 0 && (
            <div style={countBadgeStyle}>{folder.count}</div>
          )}
        </div>
      ))}
    </div>
  );
};
