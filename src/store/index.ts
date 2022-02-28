import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookuReducer from './booku/reducer';
import userReducer from './user/reducer';

const persistConfig = {
  key: 'booku',
  storage,
};

const rootReducers = combineReducers({
  booku: bookuReducer,
  user: userReducer,
});

const isProduction = process.env.NODE_ENV === 'production';

const composeEnhancer = isProduction ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(persistedReducer, composeEnhancer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
