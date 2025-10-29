import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { theme } from './design-system';

const ChatApp = lazy(() => import('chat/App'));
const EmailApp = lazy(() => import('email/App'));

const LoadingSpinner: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  }}>
    <div style={{
      border: `4px solid ${theme.colors.light}`,
      borderTop: `4px solid ${theme.colors.primary}`,
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      animation: 'spin 1s linear infinite',
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const ErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div style={{
    padding: theme.spacing.xl,
    textAlign: 'center',
    color: theme.colors.danger,
  }}>
    <h2>Failed to load micro-frontend</h2>
    <p>{error?.message || 'Please ensure all applications are running'}</p>
  </div>
);

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false, error: undefined };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat/*" element={<ChatApp />} />
              <Route path="/email/*" element={<EmailApp />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
};
