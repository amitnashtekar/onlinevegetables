import {productLoad} from './product';
import {combineReducers} from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
	productLoad,
	routing
})