import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(
	routerMiddleware(browserHistory),
	thunkMiddleware
);
const store  = createStore(reducers, middleware);

export default store;