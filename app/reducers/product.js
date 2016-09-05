import {productConstants} from '../constants';

const {REQUEST_PRODUCT,
PRODUCT_SUCCESS,
PRODUCT_FAIL} = productConstants;

const initialState = {
	isProductFetch: false
}

export function productLoad(state = initialState, action) {
	switch(action.type) {
		case REQUEST_PRODUCT:
		return Object.assign({}, state, {
			isProductFetch: false
		});

		default:
		return Object.assign({}, state);
	}

}