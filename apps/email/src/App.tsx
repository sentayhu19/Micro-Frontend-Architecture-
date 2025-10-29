import React, { useState, useMemo } from 'react';
import { FolderList } from './components/FolderList';
import { EmailList } from './components/EmailList';
import { EmailDetail } from './components/EmailDetail';
import { mockFolders, mockEmails } from './data/mockData';
import { Email } from './types';
import { useUnreadCount } from './hooks/useEventBus';

const theme = {
  colors: {
    white: '#ffffff',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  spacing: {
    md: '1rem',
    lg: '1.5rem',
  },
  borderRadius: {
    lg: '0.75rem',
    xl: '1rem',
  },
  fontSize: {
    xl: '1.25rem',
  },
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
};

const App: React.FC = () => {
  const [folders] = useState(mockFolders);
  const [emails] = useState(mockEmails);
  const [selectedFolder, setSelectedFolder] = useState('inbox');
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  const unreadCount = useMemo(
    () => emails.filter((email) => !email.read).length,
    [emails]
  );

  useUnreadCount(unreadCount);

  const filteredEmails = useMemo(() => {
    if (selectedFolder === 'starred') {
      return emails.filter((email) => email.starred);
    }
    return emails;
  }, [emails, selectedFolder]);

  const selectedEmail = filteredEmails.find((email) => email.id === selectedEmailId);

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '250px 350px 1fr',
    gap: theme.spacing.lg,
    height: '80vh',
    maxHeight: '800px',
  };

  const panelStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.lg,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.colors.borderLight}`,
  };

  const headerStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    borderBottom: 'none',
    fontWeight: '800',
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    letterSpacing: '-0.02em',
  };

  const foldersPanelStyle: React.CSSProperties = {
    ...panelStyle,
  };

  const foldersBodyStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: theme.spacing.md,
  };

  const emptyStateStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.text.secondary,
  };

  return (
    <div style={containerStyle}>
      <div style={foldersPanelStyle}>
        <div style={headerStyle}>Folders</div>
        <div style={foldersBodyStyle}>
          <FolderList
            folders={folders}
            selectedFolder={selectedFolder}
            onSelectFolder={setSelectedFolder}
          />
        </div>
      </div>

      <div style={panelStyle}>
        <div style={headerStyle}>
          {folders.find((f) => f.id === selectedFolder)?.name || 'Emails'}
        </div>
        <EmailList
          emails={filteredEmails}
          selectedEmail={selectedEmailId}
          onSelectEmail={setSelectedEmailId}
        />
      </div>

      <div style={panelStyle}>
        {selectedEmail ? (
          <EmailDetail email={selectedEmail} />
        ) : (
          <div style={emptyStateStyle}>
            <p>Select an email to read</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
