import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const BookuProvider: React.FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={<div />}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
};

export default BookuProvider;
