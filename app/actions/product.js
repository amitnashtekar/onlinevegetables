import {productConstants} from '../constants';

const {	
	REQUEST_PRODUCT,
	PRODUCT_SUCCESS,
	PRODUCT_FAIL,
	REQUEST_PRODUCT_CATEGORY,
	PRODUCT_CATEGORY_SUCCESS,
	PRODUCT_CATEGORY_FAIL
} = productConstants;

export function loadProducts() {
	return {
		type: REQUEST_PRODUCT,
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

export function loadProductCategories() {
	return {
		type: REQUEST_PRODUCT_CATEGORY,
		productCategoryList: [
					{
						id: 1,
						name: 'Vegetables',
						description: 'Fresh vegetables',
						count: 10
					},
					{
						id: 2,
						name: 'Fruits',
						description: 'Fresh fruits',
						count: 20
					},
					{
						id: 3,
						name: 'Leafy Vegetables',
						description: 'Fresh Leafy vegetables',
						count: 30
					}]		
	}
}