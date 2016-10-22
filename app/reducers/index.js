import { productLoad } from './product';
import { productCategory } from './ProductCategory';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
	routing,
	productLoad,
	productCategory
})