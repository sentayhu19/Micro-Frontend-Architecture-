import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../design-system';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [unreadChats, setUnreadChats] = useState(0);
  const [unreadEmails, setUnreadEmails] = useState(0);

  React.useEffect(() => {
    const eventBus = (window as any).eventBus;
    if (eventBus) {
      const unsubscribeChat = eventBus.subscribe('chat:unread', (count: number) => {
        setUnreadChats(count);
      });
      const unsubscribeEmail = eventBus.subscribe('email:unread', (count: number) => {
        setUnreadEmails(count);
      });
      
      return () => {
        unsubscribeChat();
        unsubscribeEmail();
      };
    }
  }, []);

  const navItems = [
    { path: '/', label: 'Home', badge: 0 },
    { path: '/chat', label: 'Chat', badge: unreadChats },
    { path: '/email', label: 'Email', badge: unreadEmails },
  ];

  const headerStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    color: theme.colors.white,
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    boxShadow: theme.shadows.xl,
    backdropFilter: 'blur(10px)',
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    gap: theme.spacing.lg,
    alignItems: 'center',
  };

  const linkStyles = (isActive: boolean): React.CSSProperties => ({
    color: theme.colors.white,
    textDecoration: 'none',
    fontWeight: isActive ? '700' : '500',
    fontSize: theme.fontSize.base,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.full,
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    backdropFilter: isActive ? 'blur(10px)' : 'none',
  });

  const badgeStyles: React.CSSProperties = {
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    borderRadius: theme.borderRadius.full,
    padding: '2px 6px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mainStyles: React.CSSProperties = {
    padding: theme.spacing.xl,
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  };

  return (
    <div>
      <header style={headerStyles}>
        <nav style={navStyles}>
          <h1 style={{ margin: 0, fontSize: theme.fontSize['2xl'], fontWeight: '800', marginRight: theme.spacing.xl, letterSpacing: '-0.02em' }}>
            ✨ Micro-Frontend
          </h1>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={linkStyles(location.pathname === item.path)}
            >
              {item.label}
              {item.badge > 0 && (
                <span style={badgeStyles}>{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>
      </header>
      <main style={mainStyles}>
        {children}
      </main>
    </div>
  );
};
