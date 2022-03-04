import { Component, ErrorInfo, ReactNode } from 'react';

interface PageErrorBoundaryProps {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class PageErrorBoundary extends Component<PageErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center h-screen'>
          <h1 className='inline-block border-r mx-3 px-3 border-black text-3xl'>404</h1>
          <div className='inline-block text-3xl'>
            <h2>Sorry.. there was an error</h2>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PageErrorBoundary;
