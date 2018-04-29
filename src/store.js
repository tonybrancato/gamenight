import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import gamesReducer from './reducers/games-reducer';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';


const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducers({
    // form: formReducer,
    // auth: authReducer,
    games: gamesReducer,
    // router: routerReducer,
    }),
  composeEnhancers(applyMiddleware(thunk, middleware)),
);

// Hydrate the authToken from localStorage if it exist
// const authToken = loadAuthToken();
// if (authToken) {
// const token = authToken;
// store.dispatch(setAuthToken(token));
// }

export { store, history };
