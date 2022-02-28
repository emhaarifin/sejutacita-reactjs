import React from 'react';
import BookuRoutes from 'routes';
import BookuProviders from './Providers';
const App: React.FC = () => {
  return (
    <BookuProviders>
      <BookuRoutes />
    </BookuProviders>
  );
};

export default App;
