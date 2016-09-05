import {productConstants} from '../constants';

const {REQUEST_PRODUCT,
PRODUCT_SUCCESS,
PRODUCT_FAIL} = productConstants;

export function loadProductsActn() {
	return {
	type: REQUEST_PRODUCT,
	isProductFetch: true
	}
}