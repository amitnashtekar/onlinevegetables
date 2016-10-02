import { createStore } from 'redux';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

const store  = createStore(reducers);
export default store;