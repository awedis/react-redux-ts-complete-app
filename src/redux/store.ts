import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// @ts-ignore
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import { watchAgeUp } from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger, thunk];
const middlewares = [thunk, sagaMiddleware];

export const store: any = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);
sagaMiddleware.run(watchAgeUp);

export const persistor = persistStore( store );

export default { store, persistStore };