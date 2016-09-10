import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import storeVage from './store/store';
import {App} from './components/index.js';
import {ProductCategoryApp} from './containers/index.js';

render(
	<Provider store={storeVage}>
	<ProductCategoryApp />
	</Provider>,


	document.getElementById('root')
);


