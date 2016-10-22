import axios from 'axios';

export function getProductCategories() {
	return axios.get('http://www.punesubji.com/store/rest/products')
}