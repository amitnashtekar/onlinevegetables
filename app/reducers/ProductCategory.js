import { productCategoryActions } from '../constants';

const {
	GET_PRODUCT_CATEGORY_REQUEST,
	GET_PRODUCT_CATEGORY_SUCCESS,
	GET_PRODUCT_CATEGORY_FAILURE
} = productCategoryActions;

const initialState = {
	isLoading: false,
	productCategories: []		
}

export function productCategory(state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCT_CATEGORY_REQUEST:
			return Object.assign({}, state, {
				isLoading: true
			});
		case GET_PRODUCT_CATEGORY_SUCCESS:
			return Object.assign({}, state, {
				productCategories: action.payload.data || []
			});

		default:
			return Object.assign({}, state);
	}

}