import { createStore } from 'redux';
import reducers from '../reducers';

const onlineVegeStore  = createStore(reducers);
export default onlineVegeStore;