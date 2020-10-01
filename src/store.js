import { applyMiddleware, compose, createStore } from 'redux';
import { routeMiddleware, routerActions, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middlewares = [
    routerMiddleware(history),
    thunk,
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension({
            trace: true,
        }));
    }
}

export const store = createStore(
    rootReducer(history),
    initialState,
    compose(
        applyMiddleware(...middlewares),
        ...enhancers,
    )
)