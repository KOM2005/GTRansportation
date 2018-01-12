import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { chainMiddleware } from 'redux-chain';
import rootReducer from '../reducers';
// import promise from 'redux-promise';

const loggerMiddleware = createLogger();
// const middleware = [chainMiddleware, thunk]; 

export const store = createStore(
    rootReducer,
    applyMiddleware(
        // chainMiddleware,
        thunkMiddleware,
        loggerMiddleware
        
    )
);