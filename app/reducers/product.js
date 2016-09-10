import {productConstants} from '../constants';

const {
	REQUEST_PRODUCT,
	PRODUCT_SUCCESS,
	PRODUCT_FAIL,
	REQUEST_PRODUCT_CATEGORY
} = productConstants;

const initialState = {
	isProductFetch: false,
	productCategoryList: []		
}

export function productLoad(state = initialState, action) {
	switch(action.type) {
		case REQUEST_PRODUCT:
			return Object.assign({}, state, {
				isProductFetch: action.isProductFetch
			});
		case REQUEST_PRODUCT_CATEGORY:
			return Object.assign({}, state, {
				productCategoryList: action.productCategoryList
			});

		default:
			return Object.assign({}, state);
	}

}