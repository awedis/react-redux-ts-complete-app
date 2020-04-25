import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// @ts-ignore
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

import thunk from 'redux-thunk';

// const middlewares = [logger, thunk];
const middlewares = [thunk];

export const store: any = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export const persistor = persistStore( store );

export default { store, persistStore };