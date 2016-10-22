import { productActions } from '../constants';

const {
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAILURE,
	GET_PRODUCT_CATEGORY_REQUEST,
	GET_PRODUCT_CATEGORY_SUCCESS,
	GET_PRODUCT_CATEGORY_FAILURE
} = productActions;

const initialState = {
	isLoading: false,
	products: []		
}

export function productLoad(state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCT_REQUEST:
			return Object.assign({}, state, {
				products: action.products
			});
		case GET_PRODUCT_CATEGORY_REQUEST:
			return Object.assign({}, state, {
				productCategoryList: action.productCategoryList
			});	
		case GET_PRODUCT_CATEGORY_SUCCESS:
			return Object.assign({}, state, {
				productCategoryList: action.productCategoryList
			});

		default:
			return Object.assign({}, state);
	}

}