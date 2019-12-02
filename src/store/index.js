import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState = {}) => {
    console.log('Configuring Store!')
    const middlewares = [thunkMiddleware, apiMiddleware];

    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    )
}

export default configureStore;