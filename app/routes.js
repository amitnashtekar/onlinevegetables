import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProductCategory from './containers/ProductCategory';
import Products from './containers/Products';

export default (
	<Route path="/" component={App}>
		<Route path="/store/home" component={ProductCategory}></Route>
		<Route path="/store/vegetables" component={Products}></Route>
	</Route>
);
