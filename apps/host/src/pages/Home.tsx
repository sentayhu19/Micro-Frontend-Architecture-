import React from 'react';
import { Card, Button, theme } from '../design-system';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: theme.spacing['2xl'],
  };

  const titleStyles: React.CSSProperties = {
    fontSize: theme.fontSize['4xl'],
    fontWeight: '900',
    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: theme.spacing.md,
    letterSpacing: '-0.03em',
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: theme.fontSize.xl,
    color: theme.colors.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.xl,
    marginBottom: theme.spacing['2xl'],
  };

  const featureCardContent: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  };

  const features = [
    {
      title: '💬 Chat Application',
      icon: '💬',
      description: 'Real-time messaging with modern UI. Fully integrated micro-frontend with independent deployment.',
      action: () => navigate('/chat'),
      buttonText: 'Open Chat',
      gradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
    },
    {
      title: '📧 Email Application',
      icon: '📧',
      description: 'Complete email management system. Standalone micro-frontend with shared design system.',
      action: () => navigate('/email'),
      buttonText: 'Open Email',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    },
  ];

  const architectureFeatures = [
    '🏗️ Module Federation for micro-frontend integration',
    '🎨 Shared design system across all applications',
    '📡 Event-driven communication between apps',
    '🔄 Independent deployment and scaling',
    '⚡ Hot module replacement for development',
    '🎯 Type-safe with TypeScript',
  ];

  const listStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyles: React.CSSProperties = {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.fontSize.base,
    color: theme.colors.text.primary,
    border: `1px solid ${theme.colors.borderLight}`,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Micro-Frontend Architecture</h1>
        <p style={subtitleStyles}>
          A modern, scalable architecture demonstrating Module Federation with React 18
        </p>
      </div>

      <div style={gridStyles}>
        {features.map((feature, index) => (
          <Card key={index} hoverable>
            <div style={featureCardContent}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: theme.borderRadius.xl,
                background: feature.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: theme.spacing.md,
                boxShadow: theme.shadows.lg,
              }}>
                {feature.icon}
              </div>
              <h2 style={{ fontSize: theme.fontSize.xl, fontWeight: '700', margin: 0, marginBottom: theme.spacing.sm }}>
                {feature.title}
              </h2>
              <p style={{ color: theme.colors.text.secondary, margin: 0, marginBottom: theme.spacing.lg, lineHeight: '1.6' }}>
                {feature.description}
              </p>
              <Button onClick={feature.action} fullWidth>
                {feature.buttonText} →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
