import { ProductCategoryAPI } from '../api';
import { productCategoryActions } from '../constants';
import { createAction } from './utils';

const {	
	GET_PRODUCT_CATEGORY_REQUEST,
	GET_PRODUCT_CATEGORY_SUCCESS,
	GET_PRODUCT_CATEGORY_FAILURE
} = productCategoryActions;

export function getProductCategories() {
	return dispatch => {
		dispatch(createAction(GET_PRODUCT_CATEGORY_REQUEST));
		ProductCategoryAPI.getProductCategories().then(result => {
			JSON.stringify(result);
			dispatch(createAction(GET_PRODUCT_CATEGORY_SUCCESS, result));
		}).catch(error => {
			console.log(error);
			dispatch(createAction(GET_PRODUCT_CATEGORY_SUCCESS,
				{data:[{id:1, name: 'Vegetables'}]}));
		});
	};
};