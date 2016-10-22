import {createConstants} from '../helpers';

export const productActions = createConstants (
	'GET_PRODUCT_REQUEST',
	'GET_PRODUCT_SUCCESS',
	'GET_PRODUCT_FAILURE'
);

export const productCategoryActions = createConstants (	
	'GET_PRODUCT_CATEGORY_REQUEST',
	'GET_PRODUCT_CATEGORY_SUCCESS',
	'GET_PRODUCT_CATEGORY_FAILURE'	
);