import { productActions } from '../constants';

const {	
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAILURE
} = productActions;

export function loadProducts() {
	return {
		type: GET_PRODUCT_REQUEST,
		products: [
			{
				id: 1,
				name: 'product1',
				price: 10
			},
			{
				id: 2,
				name: 'product2',
				price: 20
			},
			{
				id: 3,
				name: 'product3',
				price: 30
			},
			{
				id: 4,
				name: 'product4',
				price: 40
			},
			{
				id: 5,
				name: 'product5',
				price: 50
			}

		]
	}
}