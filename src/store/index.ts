import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './books/reducer';
import userReducer from './user/reducer';
import { PersistConfig } from 'redux-persist/es/types';
import categoriesReducer from './categories/reducer';

const persistConfig: PersistConfig<RootState> = {
  key: 'booku',
  storage,
  whitelist: ['categories', 'user'],
};

const rootReducers = combineReducers({
  books: booksReducer,
  user: userReducer,
  categories: categoriesReducer,
});

const isProduction = process.env.NODE_ENV === 'production';

const composeEnhancer = isProduction ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(persistedReducer, composeEnhancer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
